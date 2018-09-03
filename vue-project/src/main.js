// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const  LoadingComp = {
  template: '<div>loading</div>'
}

const  ErrorComp = {
  template: '<div>error</div>'
}

const AsyncComp = () => ({
  // 需要加载的组件。应当是一个 Promise
  component: import('./components/HelloWorld.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000
})
Vue.component('async-example', AsyncComp)

let app = new Vue({
  el: '#app',
  render: h => h(App)
})