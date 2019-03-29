<template>
  <v-container grid-list-md text-xs-center v-if="!!getSelectedImage">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <v-list two-line style="width: 800px; margin: 0 auto;" class="elevation-1">
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="getSelectedImage.user.image">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{getSelectedImage.user.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>@{{getSelectedImage.user.username}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="text--primary">{{getSelectedImage.user.bio}}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <a
                    :href="`https://www.instagram.com/${getSelectedImage.user.instagram}`"
                    target="_blank"
                    v-if="getSelectedImage.user.instagram"
                  >
                    <v-icon>fab fa-instagram</v-icon>
                  </a>
                  <a
                    :href="`https://www.twitter.com/${getSelectedImage.user.twitter}`"
                    target="_blank"
                    v-if="getSelectedImage.user.twitter"
                  >
                    <v-icon>fab fa-twitter</v-icon>
                  </a>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card-title>
          <v-img v-if="getSelectedImage.image" height="500px" contain :src="getSelectedImage.image"></v-img>
          <v-card-text style="width: 800px; margin: 0 auto;">
            <v-flex xs12 v-if="getSelectedImage.description">
              <p class="subheading">{{getSelectedImage.description}}</p>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <span class="grey--text mr-5" xs6>{{getSelectedImage.date | formatDate}}</span>
              <div xs6 class="d-inline-flex ml-5">
                <div>
                  <v-icon>fas fa-heart</v-icon>
                  <span class="ml-2 grey--text">{{getSelectedImage.likes}}</span>
                </div>
                <div class="ml-4">
                  <v-icon>fas fa-download</v-icon>
                  <span class="ml-2 grey--text">{{getSelectedImage.downloads}}</span>
                </div>
              </div>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PhotoContainer",
  components: {},
  methods: {
    ...mapActions(["actionGetSelectedImage"])
  },
  computed: {
    ...mapGetters(["getSelectedImage"])
  },
  async created() {
    await this.actionGetSelectedImage(this.$route.params.id);
  }
};
</script>
