<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex v-for="imageData in getImageList" :key="imageData.id" md4 xs12>
        <ImageItem v-bind:imageData="imageData"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ImageItem from "@/components/home/ImageItem";

export default {
  name: "ImageList",
  components: {
    ImageItem
  },
  methods: {
    ...mapActions(['actionGetPhotos'])
  },
  computed: {
    ...mapGetters(["getImageList"])
  },
  created() {
    this.actionGetPhotos();
  }
};
</script>
