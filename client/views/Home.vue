<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <SearchForm/>
      </v-flex>
      <v-flex xs12 v-if="!!getSearchKeyword">Results for "{{getSearchKeyword}}"</v-flex>
      <v-flex xs12 v-if="!!getSearchKeyword">
        <v-btn @click="actionGetPhotos">Clear Search</v-btn>
      </v-flex>
      <v-flex xs12>
        <ImageList/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchForm from "@/components/home/SearchForm";
import ImageList from "@/components/home/ImageList";

export default {
  name: "Home",
  components: {
    ImageList,
    SearchForm
  },
  methods: {
    ...mapActions(["actionGetPhotos"])
  },
  computed: {
    ...mapGetters(["getSearchKeyword"])
  }
};
</script>
