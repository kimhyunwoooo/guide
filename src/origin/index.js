// typescripts
require('./assets/js/ui.js');

// styles
require('./assets/styles/catalog.scss');


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
const VueScrollTo = require('vue-scrollto')

Vue.use(VueRouter);
Vue.use(VueScrollTo);
const router = new VueRouter({
  routes : Routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router : router
});
Vue.component('modal', {
  template: '#modal-template'
})

let location = window.location.href;
console.log(location)

//텝메뉴 이벤트
let tabItem = document.querySelectorAll('.list-tab>li .link-tab');
let targetBar = document.getElementById('tabBar')
for (let i = 0; i < tabItem.length; i++){
  tabItem[i].addEventListener("click",function (e) {
    let targetPosition = this.dataset.position;
    let targetWidth = this.dataset.width;
    targetBar.style.left = targetPosition + 'px';
    targetBar.style.width = targetWidth + 'px';
  })
}
let homeIndex = document.querySelectorAll('.section-sidebar .link-nav,.section-sidebar .link-tag');
for (let i = 0; i < homeIndex.length; i++){
  homeIndex[i].addEventListener("click",function (e) {
    targetBar.style.left = '59px';
    targetBar.style.width ='51px';
  })
}

//사이드 메뉴
let navGroup = document.querySelectorAll('.nav-wrap .link-nav')
for (let i = 0; i < navGroup.length; i++){
  navGroup[i].addEventListener("click",function (e) {
    for (let j = 0; j < navGroup.length; j++){
      navGroup[j].parentNode.classList.remove('on');
    }
    this.parentNode.classList.add('on')
  })
}
