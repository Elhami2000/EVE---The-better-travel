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
<<<<<<< Updated upstream
import EditLine from "../views/EditLine";
=======
import firebase from "firebase/app";
import "firebase/auth";
>>>>>>> Stashed changes




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta :{
      title:'Home',
      requiresAuth: false,
    }
  },
  {
    path: "/buslines",
    name: "BusLines",
    component: BusLines,
    meta :{
      title:'BusLines',
      requiresAuth: false,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta :{
      title:'Login',
      requiresAuth: false,
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta :{
      title:'Register',
      requiresAuth: false,
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta :{
      title:'Forgot Password',
      requiresAuth: false,
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta :{
      title:'Profile',
      requiresAuth: true,
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta :{
      title:'Admin',
      requiresAuth: true,
      requiresAdmin: true,
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta :{
      title:'Create Line',
      requiresAuth: true,
      requiresAdmin: true,
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta :{
      title:'Preview Line post',
      requiresAuth: true,
      requiresAdmin: true,
    }
  },
  {
    path: "/view-line/:blogid",
    name: "ViewLine",
    component: ViewLine,
    meta :{
      title:'View Line post',
      requiresAuth: false,
    }
  },
  {
    path: "/edit-line",
    name: "EditLine",
    component: EditLine,
    meta :{
      title:'Edit Line post'
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

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if(user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if(to.matched.some((res) => res.meta.requiresAuth)){
    if(user){
      if(to.matched.some((res) => res.meta.requiresAdmin)){
        if(admin){
          return next();
        }
        return next ({name: "Home"});
      }
      return next();
    }
    return next({name: "Home"});
  }
  return next();
});


export default router;
