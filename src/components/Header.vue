<template>
    <nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid justify-content-center">
     <router-link to="/">Home</router-link> |
      <router-link to="/posts">Posts</router-link> |
       <router-link to="/photos">Photos</router-link>
  </div>
</nav>
</template>
<script>

export default {
  name: "Header",
  components: {
    
  },
};
</script>
<style>
 nav{
  padding: 60px;
}

 .router-link-active {
  font-weight: bold;

}

 a.router-link-exact-active {
  color: #42b983;
}
</style>