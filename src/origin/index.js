// typescripts
require('./assets/js/ui.js');

// styles
require('./assets/styles/style.scss');


import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
