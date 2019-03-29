<template>
  <router-link v-bind:to="`/photo/${imageData.id}`">
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 24 : 2}`"
      >
        <v-img height="250px" :src="imageData.image"></v-img>
        <v-card-actions>
          <v-list-tile style="width: 100% !important;">
            <v-list-tile-avatar>
              <v-img :src="imageData.user.image"></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{imageData.user.username}}</v-list-tile-title>
            </v-list-tile-content>

            <v-layout class="image-likes">
              <v-icon>fas fa-heart</v-icon>
              <span class="ml-2">{{imageData.likes}}</span>
            </v-layout>
          </v-list-tile>
        </v-card-actions>
      </v-card>
    </v-hover>
  </router-link>
</template>

<script>
export default {
  name: "ImageItem",
  props: ["imageData"]
};
</script>

<style scoped>
.image-likes {
  position: absolute;
  right: 20px;
}
</style>
