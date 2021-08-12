<template>
  <div class="wrapper">
    <div
      v-for="({ title, thumbnailUrl }, index) in photos"
      :key="index"
      class=""
    >
      <div class="card" >
        <img :src="thumbnailUrl" class="card-img-top" :alt="title" />
        <div class="card-body">
          <p class="card-text">{{ title }}</p>
        </div>
      </div>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { getPhotos } from "@/services/api.js";
export default {
  name: "Photos",
  components: {},
  data() {
    return {
      photos: [],

      limit: 10,
      start: 0,
    };
  },
  methods: {
    getPhotosHandler() {
      getPhotos({ _limit: this.limit, _start: this.start }).then((response) => {
        response.status == "200"
          ? (this.photos.push(...response.data), console.log(response))
          : console.log("response status=", response.status);
      });
    },

    infiniteHandler($state) {
      getPhotos({ _limit: this.limit, _start: this.start }).then(({ data }) => {
        if (data.length) {
          this.start += 10;
          this.photos.push(...data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: 15px;
  margin-top: 10vh;
}
</style>
