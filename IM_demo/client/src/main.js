import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as formatFilter from './filters/format';
import './styles/reset.scss';
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from 'element-ui';
import xss from 'xss';

Vue.config.productionTip = false;

Object.keys(formatFilter).forEach(key => {
  Vue.filter(key, formatFilter[key]);
});

Vue.use(ElementUI);

Vue.prototype.xss = xss;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
