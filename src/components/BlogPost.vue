<template>
  <div class="blog-wrapper">
      <div class="blog-content">
          <div>
              <h2 v-if="post.WelcomeScreen">{{post.title}}</h2>
              <h2 v-else>{{post.title}}</h2>
              <p v-if="post.WelcomeScreen">{{post.blogPost}}</p>
              <p class="content-preview" v-else>{{post.blogHTML}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"blogPost",
props: ["post"],
};
</script>

<style lang="scss" scoped>
    
</style>