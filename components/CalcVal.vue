<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div>{{evdata}}</div>
        <div>露出 ± {{Math.round((evdata - ev) * 100) / 100}}</div>
      </div>
      <div class="media-content">
        感度
        <div class="select">
          <select v-model="isov">
            <option v-for="iso in isos" v-bind:value="iso" v-bind:key="iso">{{ iso }}</option>
          </select>
        </div>
        <div class="media-content">
          絞り
          <div class="select">
            <select v-model="av">
              <option
                v-for="aperture in apertures"
                v-bind:value="aperture"
                v-bind:key="aperture"
              >{{ aperture }}</option>
            </select>
          </div>
        </div>
        <div class="media-content">
          SS
          <div class="select">
            <select v-model="tv">
              <option v-for="ss in sss" v-bind:value="ss" v-bind:key="ss">{{ ss }}</option>
            </select>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: ["ev"],
  data: function() {
    return {
      av: 1.8,
      isov: 50,
      tv: 500
    };
  },
  methods: {},

  computed: {
    imageUrl: function() {
      return this.ev;
    },
    apertures: function() {
      return [1.0, 1.4, 1.8, 2.0, 2.8, 4.0, 5.6, 8.0, 11, 16, 22, 32];
    },
    isos: function() {
      return [50, 64, 100, 160, 200, 400, 800, 1600, 3200];
    },
    sss: function() {
      return [1, 2, 4, 8, 15, 30, 60, 125, 250, 500, 1000, 2000, 4000, 8000];
    },
    evdata: function() {
      try {
        const av = Math.log2(Math.pow(this.av, 2));
        const tv = Math.log2(Math.round(this.tv));
        const isov = Math.log2(this.isov / 100);
        // console.log(tv, av, isov);
        return Math.round((tv + av + isov) * 100) / 100;
      } catch {
        return "計算失敗";
      }
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
