<template>
  <div class="box">
    <article class="media">
      <div class="media-left"></div>
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
    </article>
  </div>
</template>
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
