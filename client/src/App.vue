<template>
  <div id="app">
      <router-view/>
      <vue-snotify></vue-snotify>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      admin_view: true
    };
  },
  components: {}
};
</script>

<style>
</style>
