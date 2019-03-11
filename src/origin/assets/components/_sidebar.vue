<template>
  <div class="section-sidebar" v-bind:class="{side__close:toggleBar}">
    <h1 class="title-logo">
      <img src="../images/logo@2x.png" width="150" height="40" class="logo-img" alt="INTERACTION CATALOG">
    </h1>
    <button type="button" class="btn-fold" v-on:click="toggleBar = !toggleBar"><span class="icon-fold">메뉴 접기</span></button>
    <div class="box-nav">
      <h2 class="title-navigation">네비게이터</h2>
      <ul class="nav-wrap">
        <li class="on">
          <a href="#none" class="link-nav">
            <span class="icon-all"></span>
            <strong class="title-cate">All</strong>
            <span class="count-cate">({{ filteredCount(0).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-states"></span>
            <strong class="title-cate">States</strong>
            <span class="count-cate">({{ filteredCount(1).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-scroll"></span>
            <strong class="title-cate">Scroll</strong>
            <span class="count-cate">({{ filteredCount(2).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-splash"></span>
            <strong class="title-cate">Splash</strong>
            <span class="count-cate">({{ filteredCount(3).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-page"></span>
            <strong class="title-cate">Page</strong>
            <span class="count-cate">({{ filteredCount(4).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-flow"></span>
            <strong class="title-cate">Flow</strong>
            <span class="count-cate">({{ filteredCount(5).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-banner"></span>
            <strong class="title-cate">Banner</strong>
            <span class="count-cate">({{ filteredCount(6).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-animation"></span>
            <strong class="title-cate">Animation</strong>
            <span class="count-cate">({{ filteredCount(7).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-component"></span>
            <strong class="title-cate">UI Component</strong>
            <span class="count-cate">({{ filteredCount(8).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-navigation"></span>
            <strong class="title-cate">Menu Navigation</strong>
            <span class="count-cate">({{ filteredCount(9).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-reference"></span>
            <strong class="title-cate">Reference</strong>
            <span class="count-cate">({{ filteredCount(10).length }})</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-etc"></span>
            <strong class="title-cate">ETC</strong>
            <span class="count-cate">({{ filteredCount(11).length }})</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="box-tools">
      <h2 class="title-nav">tools</h2>
      <ul class="nav-tools">
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-framer"></span>
            <strong class="title-cate">Framer</strong>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-framerx"></span>
            <strong class="title-cate">Framer X</strong>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-lottie"></span>
            <strong class="title-cate">Lottie</strong>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-principle"></span>
            <strong class="title-cate">Principle</strong>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-sketch"></span>
            <strong class="title-cate">Sketch</strong>
          </a>
        </li>
        <li>
          <a href="#none" class="link-nav">
            <span class="icon-HTML"></span>
            <strong class="title-cate">HTML</strong>
          </a>
        </li>
      </ul>
    </div>

    <div class="box-tag">
      <h2 class="title-tag">script Tag</h2>
      <ul class="nav-tag">
        <li v-for="tags in filteredTags()" :key="tags">
          <a href="#none" class="link-tag">#{{ tags }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import itemList from '../data/itemList'
    export default {
      name: "side-bar",
      data : function(){
        return {
          toggleBar: false,
          typeItem : itemList.typeList,

          toolItem : itemList.item,
          framerItem : itemList.item.framer,
          framerXItem : itemList.item.framerX,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
        }
      },
      methods: {
        filteredCount: function(e) {
          let allItem = this.framerItem.concat(this.framerXItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          if(e == 0){
            return allItem
          } else if (e == 1) {
            return allItem.filter(function(i){return i.type == 1})
          } else if (e == 2) {
            return allItem.filter(function(i){return i.type == 2})
          } else if (e == 3) {
            return allItem.filter(function(i){return i.type == 3})
          } else if (e == 4) {
            return allItem.filter(function(i){return i.type == 4})
          } else if (e == 5) {
            return allItem.filter(function(i){return i.type == 5})
          } else if (e == 6) {
            return allItem.filter(function(i){return i.type == 6})
          } else if (e == 7) {
            return allItem.filter(function(i){return i.type == 7})
          } else if (e == 8) {
            return allItem.filter(function(i){return i.type == 8})
          } else if (e == 9) {
            return allItem.filter(function(i){return i.type == 9})
          } else if (e == 10) {
            return allItem.filter(function(i){return i.type == 10})
          } else if (e == 11) {
            return allItem.filter(function(i){return i.type == 11})
          }
        },
        filteredTags : function() {
          let allItem = this.framerItem.concat(this.framerXItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          let key = 'tag';
          let tagArray = new Array();
          for(let i =0;i<allItem.length;i++){
            let allTags = Object.assign({},allItem[i][key])
            for (let key of Object.values(allTags)) {
              tagArray.push(key)
            }
          }
          let tagList = tagArray.filter((item,idx,array) => {
            return array.indexOf(item) == idx;
          });
          return tagList
        }
      }
    }
/*
  filteredType() {
    return this.filteredYear.filter((site) => {
      if(this.selGame === 0){
        return site;
      }else{
        return site.type == this.selGame
      }
    })
  }*/
</script>
