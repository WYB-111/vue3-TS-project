import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import axios from '@/plugins/axiosInstance.js'
import router from './router';

const app = createApp(App)
    .use(ElementPlus, {
        locale
    })
    .use(router)
    .mount('#app')
app.config.globalProperties.axios = axios;