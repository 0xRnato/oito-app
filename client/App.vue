<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <router-link to="/">ImageApp</router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
