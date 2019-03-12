<template>
  <div id="pageHome" v-bind:class="[toggleView ? 'article-content list-view__mockup':'article-content']">
    <ul class="list-type">
      <li>
        <a href="#none" class="link-type" v-on:click="toggleView = false" v-bind:class="[toggleView ? '':'link-type__on']">
          <span class="icon-mockup"></span>
          Mock up
        </a>
      </li>
      <li>
        <a href="#none" class="link-type" v-on:click="toggleView = true" v-bind:class="[toggleView ? 'link-type__on':'']">
          <span class="icon-imagelist"></span>
          Image List
        </a>
      </li>
    </ul>
    <div class="box-search">
      <span class="icon-search"></span>
      <input type="text" id="searchInp" class="input-search" placeholder="Search Script" v-model="searchItem">
    </div>
    <!-- Framer 영역 -->
    <div class="view-item" data-tool="framer" id="framer">
      <h3 class="title-sub">Framer Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in framerItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- FramerX 영역 -->
    <div class="view-item" data-tool="framerX" id="framerx">
      <h3 class="title-sub">FramerX Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in framerXItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Lottie 영역 -->
    <div class="view-item" data-tool="lottie" id="lottie">
      <h3 class="title-sub">Lottie Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in lottieItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Principle 영역 -->
    <div class="view-item" data-tool="principle" id="principle">
      <h3 class="title-sub">Principle Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in principleItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- sketch 영역 -->
    <div class="view-item" data-tool="sketch" id="sketch">
      <h3 class="title-sub">Sketch Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in sketchItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- html 영역 -->
    <div class="view-item" data-tool="html" id="html">
      <h3 class="title-sub">HTML Interactions</h3>
      <ul class="list-item">
        <li v-for="(tools, index) in htmlItem" :key="index" v-if="tools.title.includes(searchItem)">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/images/' + tools.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[tools.type] }}</span>
          <strong class="title-item">{{ tools.title }}</strong>
          <p class="text-desc">{{ tools.desc }}</p>
          <p class="text-type">{{ tools.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ tools.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in tools.tag" :key="tags">
              <a href="#none" class="link-tag">#{{ tags }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <detail-modal></detail-modal>
  </div>
</template>

<script>

  import detailModal from './_detail-Modal'
  import itemList from '../data/itemList'
    export default {
      data : function(){
        return {
          searchItem:'',
          toggleView:false,
          typeItem : itemList.typeList,
          framerItem : itemList.item.framer,
          framerXItem : itemList.item.framerX,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html

        }
      },
      components: {
        'detail-modal' : detailModal
      }
    }
</script>
