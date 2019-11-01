<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>EV!!!</strong>
            <small>{{exif.ev}}</small>
            <br />
            <strong>ISO感度</strong>
            <small>{{exif.ISO}}</small>
            <br />
            <strong>F値</strong>
            <small>{{exif.FNumber}}</small>
            <br />
            <strong>SS</strong>
            <small>{{ss}} 秒</small>
            <br />
            <strong>撮影</strong>
            <small>± {{exif.ExposureBias}} EV</small>
            <br />
            <strong>画角(35mmフィルム換算)</strong>
            <small>{{exif.FocalLengthIn35mmFilm}} mm</small>
            <br />
          </p>
        </div>
      </div>
      <figure class="image is-32x32">
        <img :src="imageUrl" id="image" />
      </figure>
    </article>
  </div>
</template>
<script>
export default {
  props: ["url", "exif"],
  computed: {
    imageUrl: function() {
      return this.url.trim();
    },
    ss: function() {
      if (this.exif.ExposureTime > 0) {
        return `1 / ${Math.round(1 / this.exif.ExposureTime)}`;
      }
      return undefined;
    }
  }
};
</script>
<style scoped>
.box {
  background-color: rgba(0, 0, 0, 0.7);
  color: aliceblue;
  margin: 0 1em 0 1em;
}
strong {
  color: aliceblue;
}
</style>
