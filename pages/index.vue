<template>
  <section class="container" v-bind:style="{ backgroundImage }">
    <div>
      <Nav />
      <ExifBox :url="imageUrl" :exif="exif" />
      <div class="card">
        <label for="file">
          <input id="file" ref="fileInput" type="file" accept="image/*" @change="handleFile" />
        </label>
      </div>
      <CalcVal :ev="exif.ev" />
    </div>
  </section>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import ExifBox from "~/components/ExifBox.vue";
import CalcVal from "~/components/CalcVal.vue";
import Nav from "~/components/Nav.vue";
import AddButton from "~/components/AddButton.vue";
import loadImage from "blueimp-load-image";

export default {
  components: {
    ExifBox,
    Nav,
    AddButton,
    CalcVal
  },
  data: function() {
    return {
      imageUrl:
        "https://res.cloudinary.com/yk/image/upload/c_scale,w_600/v1572172606/expo/IMG_20190914_180940_j9t3y4.jpg",
      exif: {
        ISO: 50,
        FNumber: 2.2,
        ExposureTime: 0.002108,
        ExposureBias: 0,
        FocalLengthIn35mmFilm: 26,
        ev: 12.16,
        Thumbnail:
          "https://res.cloudinary.com/yk/image/upload/c_scale,w_50/v1572172606/expo/IMG_20190914_180940_j9t3y4.jpg"
      }
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
          const ISO = ex.get("PhotographicSensitivity");
          const FNumber = ex.get("FNumber");
          const ExposureTime = ex.get("ExposureTime");
          const ExposureBias = ex.get("ExposureBias");
          const FocalLengthIn35mmFilm = ex.get("FocalLengthIn35mmFilm");
          const Thumbnail = ex.Thumbnail;
          let ev;

          try {
            const tv = Math.log2(Math.round(1 / this.exif.ExposureTime));
            const av = Math.log2(Math.pow(this.exif.FNumber, 2));
            const isov = Math.log2(this.exif.ISO / 100);
            console.log(isov);
            ev = Math.round((tv + av - isov) * 100) / 100;
          } catch {
            ev = "計算失敗";
          }
          // ev = "tes";

          const exif = {
            ISO,
            FNumber,
            ExposureTime,
            ExposureBias,
            FocalLengthIn35mmFilm,
            ev,
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
