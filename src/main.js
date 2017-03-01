import Vue from 'vue'
import App from './App.vue'
import Modal from './Modal.vue'

new Vue({
  el: '#app',
  data: {
    show: false,
  },
  render: h => h(App)
})

new Vue({
  el: '#firstModalBox',
  data: {
    show: false,
  },
  template: '<div><h5>{{ firstTemplateHeading }}</h5><p>Before an instance can be created, there must be a new Vue(). </div>',
  computed: {

  }
})

new Vue({
  el: '#modal',
  data: {
    show: true,
  },
  render: h => h(Modal),
})
