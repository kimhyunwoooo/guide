<template>
  <div id="wrapContainer" class="wrap-container">
    <side-bar></side-bar>
    <div class="section-content">
      <h2 class="heading-content">가이드 본문</h2>
      <div class="view-tab">
        <div id="tabBar" class="bar_menu" style="width:51px;left:59px;" >
          <div class="inner_bar" style="width: 100%"></div>
        </div>
        <ul class="list-tab">
          <li>
            <router-link to="/home" class="link-tab" data-position="59" data-width="51">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="link-tab" data-position="136" data-width="50">about</router-link>
          </li>
          <li>
            <router-link to="/update" class="link-tab" data-position="213" data-width="59">update</router-link>
          </li>
          <li>
            <router-link to="/docs" class="link-tab" data-position="295" data-width="41">Docs</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import sideBar from '../origin/assets/components/_sidebar.vue'
export default {
  data: function () {
    return {
    }
  },
  components: {
    'side-bar' : sideBar
  }
}
</script>
