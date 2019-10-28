<template>
  <section class="container" v-bind:style="{ backgroundImage }">
    <div>
      <Nav />
      <ExifBox />
      <h1 class="title">exposures</h1>
      <h2 class="subtitle">My well-made Nuxt.js project</h2>
      <AddButton />
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
    </div>
  </section>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import ExifBox from "~/components/ExifBox.vue";
import Nav from "~/components/Nav.vue";
import AddButton from "~/components/AddButton.vue";

export default {
  components: {
    ExifBox,
    Nav,
    AddButton
  },
  data: function() {
    return {
      imageUrl:
        "https://res.cloudinary.com/yk/image/upload/c_scale,w_600/v1572172606/expo/IMG_20190914_180940_j9t3y4.jpg"
    };
  },
  computed: {
    backgroundImage: function() {
      return `url(${this.imageUrl})`;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* background-image: url("https://res.cloudinary.com/yk/image/upload/c_scale,w_834/v1572172606/expo/IMG_20190914_180940_j9t3y4.jpg"); */
  background-size: cover;
}
</style>
