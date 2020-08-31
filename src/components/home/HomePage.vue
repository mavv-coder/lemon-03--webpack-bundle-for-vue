<template>
  <div>
    <navbar-component />
    <div class="main-container">
      <h1 class="main-title">Hello from Home Component</h1>
      <img src="../../assets/img/godzilla.jpg" alt="godzilla" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NavbarComponent } from "../../layout";

export default Vue.extend({
  name: "HomeComponent",
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
  color: rgb(255, 139, 183);
  margin-bottom: 10px;
}

img {
  max-width: 500px;
}
</style>
