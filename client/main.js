import Vue from 'vue';
import moment from 'moment';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(value.toString()).format('MM/DD/YYYY');
  }
  return null;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
