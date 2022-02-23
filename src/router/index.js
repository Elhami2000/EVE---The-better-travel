import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BusLines from "../views/BusLines.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta :{
      title:'Home'
    }
  },
  {
    path: "/buslines",
    name: "BusLines",
    component: BusLines,
    meta :{
      title:'BusLines'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | EVE`;
  next();
});


export default router;
