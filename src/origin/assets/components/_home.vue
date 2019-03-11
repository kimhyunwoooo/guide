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
      <input type="text" id="searchInp" class="input-search" placeholder="Search Script">
    </div>
    <div class="view-item" data-tool="framer">
      <h3 class="title-sub">Framer Interactions</h3>
      <ul class="list-item">
        <li v-for="(framer, index) in framerItem" :key="index">
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/docs/assets/images/' + framer.gifImg + ')' }">
              </span>
              <span class="box-photo" v-bind:style="{ 'background-image': 'url(https://kimhyunwoooo.github.io/guide/docs/assets/images/' + framer.jpgImg + ')' }">
              </span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">{{ typeItem[framer.type] }}</span>
          <strong class="title-item">{{ framer.title }}</strong>
          <p class="text-desc">{{ framer.desc }}</p>
          <p class="text-type">{{ framer.used }}</p>
          <a href="#none" class="link-example" target="_blank">{{ framer.url }}</a>
          <ul class="wrap-tag">
            <li v-for="tags in framer.tag" :key="tags">
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
          toggleView:false,
          typeItem : itemList.typeList,
          framerItem : itemList.item.framer
        }
      },
      components: {
        'detail-modal' : detailModal
      }
    }
</script>
