import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@/assets/scss/style.scss';
import VueI18n from 'vue-i18n';
import messages from '@/locales/index';
import VueLodash from 'vue-lodash';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueI18n);
Vue.use(VueLodash);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'pl',
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  data: {
    appName: 'Instagram Clone'
  }
}).$mount('#app');
