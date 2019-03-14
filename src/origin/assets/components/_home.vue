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
    <div id="boxSearch" class="box-search" v-bind:class="{ 'on-focus': isFocus }">
      <span class="icon-search"></span>
      <input type="text" id="searchInp" class="input-search" v-on:focus="isFocus = onFocus()" v-on:blur="isFocus = onBlur()" placeholder="Search Script" v-model="searchItem">
    </div>
    <!-- Framer 영역 -->
    <div class="view-item" data-tool="framer" id="framer">
      <div class="list-item">
        <h3 class="title-sub">Framer Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in framerItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- FramerX 영역 -->
    <div class="view-item" data-tool="framerX" id="framerx">
      <div class="list-item">
        <h3 class="title-sub">FramerX Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in framerXItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Lottie 영역 -->
    <div class="view-item" data-tool="lottie" id="lottie">
      <div class="list-item">
        <h3 class="title-sub">Lottie Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in lottieItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Principle 영역 -->
    <div class="view-item" data-tool="principle" id="principle">
      <div class="list-item">
        <h3 class="title-sub">Principle Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in principleItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- sketch 영역 -->
    <div class="view-item" data-tool="sketch" id="sketch">
      <div class="list-item">
        <h3 class="title-sub">Sketch Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in sketchItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- html 영역 -->
    <div class="view-item" data-tool="html" id="html">
      <div class="list-item">
        <h3 class="title-sub">HTML Interactions<span class="none-text">목록이 없습니다.</span></h3>
        <div class="item" v-for="(tools, index) in htmlItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
              <a href="#none" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#boxSearch'">#{{ tags }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <detail-modal></detail-modal>
  </div>
</template>

<script>
  import { BUS } from '../js/eventBus'
  import detailModal from './_detail-Modal'
  import itemList from '../data/itemList'
    export default {
      data : function(){
        return {
          searchItem:'',
          toggleView:false,
          toggleTag:false,
          typeItem : itemList.typeList,
          framerItem : itemList.item.framer,
          framerXItem : itemList.item.framerX,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
          isFocus : false,
          text:''
        }
      },
      components: {
        'detail-modal' : detailModal
      },
      created(){
        console.log(this,'aaaa')
        BUS.$on('bus:call', this.receive)
      },
      methods : {
        receive(aa) {
          return this.searchItem = aa;
        },
        onBlur : function(){
          let searchBoxInp = document.getElementById('searchInp').value;
          if(searchBoxInp == ""|| searchBoxInp==null) {
            return false
          } else {
            return true
          }
        },
        onFocus :function(){
          return true
        },
        searchTag: function (tagName) {
          return this.searchItem = tagName, this.isFocus = true
        }
      }
    }
</script>
