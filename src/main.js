import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Journal from './views/Journal.vue'
import Article from './views/Article.vue'
import Missing from './views/Missing.vue'
import './style.css'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [{path:'/',component:Home},{path:'/blogs',component:Journal},{path:'/blog/:slug',component:Article},{path:'/:pathMatch(.*)*',component:Missing}],
 scrollBehavior(to,from,saved){return saved || (to.hash ? {el:to.hash,top:24,behavior:'smooth'} : {top:0})}
})
router.afterEach(to => { document.title = to.path === '/blogs' ? 'Journal — Sarang' : 'Sarang — Developer & Writer' })
createApp(App).use(router).mount('#app')
