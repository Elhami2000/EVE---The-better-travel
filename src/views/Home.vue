<template>
  <div class="home">
    <BlogPost :post="WelcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: {BlogPost},
  data (){
    return{
      WelcomeScreen:{
        title:"Welcome",
        blogPost:"Linja te reja qdo dite",
        WelcomeScreen:true,
        photo:"coding",
      },
      sampleBlogPost :[
        {
        title:"Title 2",
        blogHTML:"This is another line",
        blogCoverPhoto:"beautiful-stories",
      },
      {
        tile:"Title 3",
        blogHTML:"This another line 2",
        blogCoverPhoto:"designed-for-everyone"

      },
      ],
  };
  },
};
</script>
