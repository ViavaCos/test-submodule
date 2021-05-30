import { createApp } from 'vue'
import App from './App.vue'

// 引入前段基础库，然后可以做些初始化啥的
import Submodule from 'submodule'
const sub = new Submodule()

console.log(sub);

createApp(App).mount('#app')
