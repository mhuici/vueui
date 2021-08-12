<template>
  <div class="container">
    <div class="row">
      <div class="col mt-3 pt-3 card">
        <b-table striped hover :items="posts"></b-table>
      </div>
    </div>
  </div>
</template>

<script>

import { getPosts } from "@/services/api.js";
export default {
  name: "Posts",
  components: {},
  data() {
    return {
      posts: [],
     
      serverParameters: {},
    };
  },
  methods: {
    getPostsHandler() {
      getPosts().then((response) => {
        response.status == "200"
          ? (this.posts = response.data)
          : console.log("response status=", response.status);
      });
    },
  },
  mounted() {
    this.getPostsHandler();

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
