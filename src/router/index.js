import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/login/login.vue'
import Layout from '../views/layout/layout.vue'

const routes = [
	{
		path: "/login",
		name: "Login",	
		component: Login,
    },
    {
		path: "/",
        component: Layout,
        children: [
            {
                path: '/home',
                name:'Home',
                component: ()=> import("../views/home.vue"),
            },
            {
                path: '/apidoc',
                name:'ApiDoc',
                component: ()=> import("../views/apidoc.vue"),
            }
        ]
    },
];
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token'); 
    if (token) {
        next()
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next({
                path:'/login'
            })
        }
    }
});  
export default router;