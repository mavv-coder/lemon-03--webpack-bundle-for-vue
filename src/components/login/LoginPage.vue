<template>
  <div>
    <navbar-component />
    <div class="main-container">
      <h1 class="main-title">Hello from Login Component</h1>
      <img class="images" src="../../assets/img/hokusai.jpg" alt="hokusai" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NavbarComponent } from "../../layout";

export default Vue.extend({
  name: "LoginComponent",
  components: { NavbarComponent },
});
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.main-title {
  color: rgb(245, 84, 146);
  margin-bottom: 10px;
}

img {
  max-width: 500px;
}
</style>
