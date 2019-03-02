import home from './assets/components/pages/_home.vue';
import about from './assets/components/pages/_about.vue';
import update from './assets/components/pages/_update.vue';
import docs from './assets/components/pages/_docs.vue';

export default  [
  {path: '/home',component:home},
  {path: '/about',component:about},
  {path: '/update',component:update},
  {path: '/docs',component:docs},
  {path: '/', redirect: '/home'}
]
