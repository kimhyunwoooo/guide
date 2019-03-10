<template>
  <div id="wrapContainer" class="wrap-container">
    <side-bar></side-bar>
    <div class="section-content">
      <h2 class="heading-content">가이드 본문</h2>
      <div class="view-tab">
        <div class="bar_menu" style="left:87px;">
          <div class="inner_bar" style="width: 48px; margin-left: -24px;"></div>
        </div>
        <ul class="list-tab">
          <li>
            <router-link to="/home" class="link-tab">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="link-tab">about</router-link>
          </li>
          <li>
            <router-link to="/update" class="link-tab">update</router-link>
          </li>
          <li>
            <router-link to="/docs" class="link-tab">Docs</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <detail-modal></detail-modal>
  </div>
</template>

<script>

import sideBar from '../origin/assets/components/_sidebar.vue'
import detailModal from '../origin/assets/components/_detail-Modal.vue'


export default {

  components: {
    'side-bar' : sideBar,
    'detail-modal' : detailModal,
  }
}
</script>
