import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App)

//自定义插件***********************************************************************************
//引入插件
import {i18nPlugins} from './plugins'

app.use(i18nPlugins, {
    greeting:{
        hello: "你好"
    },
    name: "哈哈"
})
//通过 app.provide() 使一个资源可被注入进整个应用*************************************************

app.provide("message", {
    errorMsg:"error!!",
    warningMsg: "warning!"
})

app.mount('#app')
