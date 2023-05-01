<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'
</script>


<template>
    <div class="app-container">
      <NavBar class="navbar"/>
      <RouterView class="router-view"/>
    </div>
</template>


<style scoped>
.app-container {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 
    'navbar navbar' 
    'content content';
}

.navbar {
  grid-area: navbar;
  background-color: #f9f9f9;
}
.router-view {
  grid-area: content
}

@media only screen and (min-width: 1000px) {
  .app-container {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      'navbar content' 
      'navbar content';
  }
}
</style>