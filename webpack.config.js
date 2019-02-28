/*
	[ webpack.config.js ]
	- BABEL
	- SASS
	- imageOptimize
*/

/*
	[ todo ]
	> 1차
		- package.json 수정

	> 2차
		- html, css 이미지 경로 설정(내부 작업 환경 정리 후)
		- postCSS 기능 설정 추가
		- image-optimize 상세 값 설정

		- 라이브러리의 별도 번들링(캐시, 로딩속도 개선), https://medium.com/@soeunlee/webpack%EC%9D%84-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%B4-%EB%B3%B4%EA%B8%B0-a5ccfec070f3
*/

// node modules
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const rootPaths = {
  entry: path.resolve(__dirname, 'src/origin'),
  output: path.resolve(__dirname, 'docs')
};
// entry paths
const entryPaths = {
  index: path.resolve(rootPaths.entry, `index.js`),
  modules: path.resolve(rootPaths.entry, `assets/js`)
};
// output paths
const outputPaths = {
  modules: `assets/js`,
  style: 'assets/styles/style.css',
  images: path.resolve(rootPaths.output, 'assets/images')
};
// cdn paths
const cdnPath = './';

// entry htmlList(htmlWebpackPlugin) - 루트 폴더 내 모든 *.html을 가져오도록 설정
let entryHtmlFiles = (() => {
  let fileList = [...fs.readdirSync(rootPaths.entry)].filter(file => file.includes('.html'));
  let resultList = fileList;

  resultList.forEach( (file, index, fileList) => {
    fileList[index] = (new htmlWebpackPlugin({
      filename: file,
      template: `${rootPaths.entry}/${file}`
    }));
  });

  return resultList;
})();


module.exports = env => {
  const isProd = (env.NODE_ENV == 'prod');

  return {
    entry: {
      index: path.resolve(entryPaths.index)
    },
    devtool: isProd ? '' : 'inline-source-map',
    output: {
      path: rootPaths.output,
      publicPath: (isProd) ? cdnPath : '/',
      filename: outputPaths.modules + `/[name].js`,
    },
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ],
              'sass': [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
              ]
            }
          }
        },
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          include: [ entryPaths.modules ],
          exclude: '/node_modules/',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                targets: { node: 'current' }, // 노드일 경우만
                modules: 'false'
              }
              ]
            ],
          },
        },
        {
          test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: true,
                outputPath: (url, resourcePath, context) => {
                  console.log('[file-loader]', resourcePath.slice(resourcePath.indexOf('assets'), resourcePath.length));

                  return resourcePath.slice(resourcePath.indexOf('assets'), resourcePath.length);
                },
                name: '[name].[ext]',
              }
            },
            {
              loader: 'image-webpack-loader',		// image-optimize(상세 값은 추후적용)
              options: {
                disable: (!isProd),
                mozjpeg: {		// https://github.com/imagemin/imagemin-mozjpeg
                  progressive: true,	// progressive 사용 여부 논의(저해상도 우선 출력 되는 방식)
                  quality: 70
                },
                optipng: {		// https://github.com/imagemin/imagemin-optipng
                  enabled: true,
                },
                pngquant: {		// https://github.com/imagemin/imagemin-pngquant
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {		// https://github.com/imagemin/imagemin-gifsicle
                  interlaced: false,
                }
              }
            }
          ],
        },
        {
          test: /\.scss$/,
          use: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: (!isProd),
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: 'postcss',
                  sourceMap: (!isProd) ? 'inline' : '',
                  plugins: [ require('autoprefixer') ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: (isProd) ? false : true,
                  sourceMapContents: (isProd) ? false : true,
                  outputStyle: (isProd) ? 'compressed' : 'compact',
                  includePaths: ['./node_modules']
                },
              }
            ]
          })
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: ["img:src"]
            }
          }
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      new VueLoaderPlugin(),
      new cleanWebpackPlugin(['./docs']),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new extractTextPlugin({
        filename: outputPaths.style
      }),
      new optimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          map : (isProd) ? null : {
            inline : (isProd) ? false : true
          }
        }
      })
    ].concat(entryHtmlFiles),
    optimization: { }
  }
};
