import Vue from 'vue';
import App from './App';
import store from './store'
import * as filters from './filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
