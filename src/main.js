import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
// 事件BUS
export const eventBus = new Vue();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
