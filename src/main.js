import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFormulate from '@braid/vue-formulate'
import JsonCSV from 'vue-json-csv'
import { fr } from '@braid/vue-formulate-i18n'
import './assets/css/bootstrap.css'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VueFormulate, {
    plugins: [fr],
    locale: 'fr',
    classes: {
        outer: ['form-group'],
        label: ['form-label', 'mt-2'],
        input: ['form-control'],
        inputHasErrors: ['is-invalid'],
        help: ['form-text', 'text-muted', 'small'],
        error: ['text-danger', 'mt-1', 'small'],
        errors: ['list-unstyled', 'text-danger']
    }
})
Vue.component('downloadCsv', JsonCSV)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
