<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <PhotoContainer/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PhotoContainer from "@/components/photo/PhotoContainer";

export default {
  name: "Photo",
  components: {
    PhotoContainer
  }
};
</script>
