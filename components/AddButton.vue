<template>
  <p class="field">
    <button class="button is-rounded is-link">+</button>
  </p>
</template>
<script>
export default {
  methods: {
    handleButton: function(event) {
      console.log("fire");
    }
  }
};
</script>
