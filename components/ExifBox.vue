<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>ISO感度</strong>
            <small>{{exif.ISO}}</small>
            <small>31m</small>
            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
          <div>ISO感度</div>
          <div>F値 {{exif.FNumber}}</div>
          <div>SS {{ss}}</div>
          <div>露出 {{exif.ExposureBias}}</div>
          <div>画角(35mm換算) {{exif.FocalLengthIn35mmFilm}} mm</div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
      <figure class="image is-128x128">
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
