import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BusLines from "../views/BusLines.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost";
import BlogPreview from "../views/BlogPreview.vue";
import ViewLine from "../views/ViewLine.vue";




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
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta :{
      title:'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta :{
      title:'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta :{
      title:'Forgot Password'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta :{
      title:'Profile'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta :{
      title:'Admin'
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta :{
      title:'Create Line'
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta :{
      title:'Preview Line post'
    }
  },
  {
    path: "/view-line/:blogid",
    name: "ViewLine",
    component: ViewLine,
    meta :{
      title:'View Line post'
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
