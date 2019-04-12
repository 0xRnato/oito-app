<template>
  <v-layout row text-xs-left>
    <v-flex md2>
      <img
        class="img-profile"
        v-if="userData.profileImage && userData.profileImage.data"
        v-bind:src="userData.profileImage.data"
      >
    </v-flex>
    <v-flex md10>
      <h1>{{userData.name}}</h1>
      <div
        v-if="userData.address && userData.address.city && userData.address.state && userData.address.country"
      >
        <v-icon class="icon-profile">location_on</v-icon>
        <span>{{userData.address.city}} - {{userData.address.state}} / {{userData.address.country}}</span>
      </div>
      <div v-if="userData.phone">
        <v-icon class="icon-profile">phone</v-icon>
        <span>{{userData.phone}}</span>
      </div>
      <div v-if="userData.email">
        <v-icon class="icon-profile">mail</v-icon>
        <span>{{userData.email}}</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Contact",
  props: ["userData"]
};
</script>

<style scoped>
.img-profile {
  width: 180px;
  border-radius: 50%;
}
h1 {
  color: #6550a1;
}
.icon-profile {
  color: #ff974f;
  margin-right: 10px;
}
</style>
