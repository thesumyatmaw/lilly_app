<template>
  <div id="app">
    <FreeTestPackage />
  </div>
</template>

<script>
import FreeTestPackage from './components/FreeTestPackage.vue';

export default {
  name: 'App',
  components: {
    FreeTestPackage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
