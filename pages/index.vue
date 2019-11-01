<template>
  <section class="container" v-bind:style="{ backgroundImage }">
    <div>
      <Nav />
      <ExifBox :url="imageUrl" :exif="exif" />
      <h1 class="title">exposures</h1>
      <h2 class="subtitle">My well-made Nuxt.js project</h2>
      <!-- <AddButton @click="$emit('enlarge-text')" /> -->
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
      <div class="card">
        <label for="file">
          <input id="file" ref="fileInput" type="file" accept="image/*" @change="handleFile" />
        </label>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import ExifBox from "~/components/ExifBox.vue";
import Nav from "~/components/Nav.vue";
import AddButton from "~/components/AddButton.vue";
import loadImage from "blueimp-load-image";

export default {
  components: {
    ExifBox,
    Nav,
    AddButton
  },
  data: function() {
    return {
      imageUrl:
        "https://res.cloudinary.com/yk/image/upload/c_scale,w_600/v1572172606/expo/IMG_20190914_180940_j9t3y4.jpg",
      exif: {}
    };
  },
  computed: {
    backgroundImage: function() {
      return `url(${this.imageUrl})`;
    }
  },
  methods: {
    handleFile: function(e) {
      const file = e.target.files[0];
      this.setBgImage(file);
      this.attachImg(file);
    },
    setBgImage(file) {
      try {
        this.imageUrl = URL.createObjectURL(file);
      } catch {
        console.log("URL.createObjectURL is failed");
      }
    },
    attachImg(file) {
      loadImage.parseMetaData(file, data => {
        const ex = data.exif;
        if (ex) {
          const ISO = ex.get(0x8827);
          const FNumber = ex.get("FNumber");
          const ExposureTime = ex.get("ExposureTime");
          const ExposureBias = ex.get("ExposureBias");
          const FocalLengthIn35mmFilm = ex.get("FocalLengthIn35mmFilm");
          const Thumbnail = ex.Thumbnail;

          const exif = {
            ISO,
            FNumber,
            ExposureTime,
            ExposureBias,
            FocalLengthIn35mmFilm,
            Thumbnail
          };
          this.exif = exif;
        }
      });
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
  background-size: cover;
  background-position: center;
}
</style>
