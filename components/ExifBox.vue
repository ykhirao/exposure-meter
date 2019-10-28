<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong>
            <small>@johnsmith</small>
            <small>31m</small>
            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
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
import EXIF from "exif-js";
export default {
  props: ["url"],
  computed: {
    imageUrl: function() {
      return this.url.trim();
    }
  },
  mounted: function() {
    const image = document.getElementById("image");
    console.log(image);
    require("exif-js");
    console.log(EXIF);
    window.onload = getExif;

    function getExif() {
      const img1 = document.getElementById("image");
      EXIF.getData(img1, function() {
        var FNumber = EXIF.getTag(this, "FNumber");
        console.log(FNumber);
        var model = EXIF.getTag(this, "Model");
      });

      var img2 = document.getElementById("img2");
      EXIF.getData(img2, function() {
        var allMetaData = EXIF.getAllTags(this);
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
      });
    }
  }
};
</script>
<style scoped>
.box {
  background-color: rgba(0, 0, 0, 0.5);
  color: aliceblue;
  margin: 0 1em 0 1em;
}
strong {
  color: aliceblue;
}
</style>
