/* eslint-disable */
<template>
  <v-toolbar fixed style="z-index:999;">
    <v-toolbar-title>
      <router-link to="/">
        <img src="@/assets/logo.png">
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/about">Quem somos</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/terms">Termos de uso</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/login">Entrar</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/register">Registrar</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #6550a1;
}
img {
  max-width: 120px;
}
</style>
