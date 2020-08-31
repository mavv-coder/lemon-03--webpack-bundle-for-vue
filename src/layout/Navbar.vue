<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="title">Vue app</v-toolbar-title>

      <v-icon class="icon" color="rgb(245, 84, 146)">mdi-heart</v-icon>

      <link rel="stylesheet" href="" />
      <ul>
        <router-link tag="li" class="link" to="/login" exact>Login</router-link>
        <router-link tag="li" class="link" to="/home" exact>Home</router-link>
      </ul>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style scoped>
.title {
  color: white;
}

.icon {
  margin: 0 10px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  color: white;
  padding: 8px;
  margin: 0 10px;
  border-radius: 5%;
}

li:active,
li:hover {
  background-color: rgb(245, 84, 146);
  cursor: pointer;
}
</style>
