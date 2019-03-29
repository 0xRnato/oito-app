<template>
  <div>
    <v-card-text>
        <v-combobox
          :items="getSearchHistory"
          label="Search"
          append-icon="search"
          @input="searchImages"
          ref="searchField"
          v-model="searchKeywordModel"
        ></v-combobox>
    </v-card-text>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchForm",
  data() {
    return {
      searchKeywordModel: null
    };
  },
  methods: {
    ...mapActions(["actionSearchPhotos"]),
    searchImages(_searchKeyword) {
      this.actionSearchPhotos(_searchKeyword);
      this.$nextTick(() => {
        this.searchKeywordModel = null;
        this.$refs.searchField.blur();
      });
    }
  },
  computed: {
    ...mapGetters(["getSearchHistory"])
  }
};
</script>
