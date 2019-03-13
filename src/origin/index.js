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


// GNB Bar 애니메이션
/*
$('.list-tab>li').on('mouseenter', function() {
  var menuIndex = $(this).index();
  var menuNum = $('.list-tab>li:eq('+menuIndex+') .link-tab');
  var menuWid = parseInt( menuNum.outerWidth() );
  var menuPos = parseInt( menuNum.position().left);
  $('.bar_menu').stop().animate({
    left : menuPos + parseInt((menuWid/2))
  },200);
  $('.inner_bar').stop().animate({
    width : menuWid+3,
    marginLeft : -(menuWid/2)
  },400);
});
*/


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
let homeIndex = document.querySelectorAll('.section-sidebar .link-nav');
for (let i = 0; i < homeIndex.length; i++){
  homeIndex[i].addEventListener("click",function (e) {
    targetBar.style.left = '59px';
    targetBar.style.width ='51px';
  })
}

//검색창 이벤트
let searchBoxInp = document.getElementById('searchInp');
searchBoxInp.addEventListener('blur', function(event){
  let searchValue = searchBoxInp.value;
  if (searchValue=="" || searchValue==null) {
    searchBoxInp.setAttribute('placeholder','Search Script');
    this.parentNode.classList.remove('on-focus')
  }
});
searchBoxInp.addEventListener('focus', function(event){
  searchBoxInp.setAttribute('placeholder','');
  this.parentNode.classList.add('on-focus')
});


//메뉴
let navGroup = document.querySelectorAll('a.link-nav')
for (let i = 0; i < navGroup.length; i++){
  navGroup[i].addEventListener("click",function (e) {
    for (let j = 0; j < navGroup.length; j++){
      navGroup[j].parentNode.classList.remove('on');
    }
    this.parentNode.classList.add('on')
  })
}
