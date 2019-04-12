<template>
  <v-container column text-xs-center>
    <v-layout row>
      <v-flex md3 sm12 v-for="(offer, index) in getOffersEmployeeAll" :key="index">
        <v-card>
          <v-img class="white--text img-profile" :src="offer.user.profileImage"></v-img>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12>
                <span class="headline">{{offer.user.name}}</span>
                <br>
                <span>{{offer.user.address.city}}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <v-flex class="skills">
              <v-chip
                v-for="(skill, index) in getUserSkills(offer.user.skills)"
                :key="index"
              >{{skill}}</v-chip>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-icon class="icon-profile">info</v-icon>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tab2",
  computed: {
    ...mapGetters(["getOffersEmployeeAll", "getUserSkills"])
  },
  methods: {
    ...mapActions(["actionOffersEmployeeAll"])
  },
  created() {
    this.actionOffersEmployeeAll();
  }
};
</script>

<style scoped>
.headline {
  color: #ff974f;
}
h2 {
  color: #6550a1;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  background-color: #6550a1;
  color: white;
}
.icon-profile {
  color: #6550a1;
  margin: 0 auto;
  font-size: 60px;
}
.img-profile {
  width: 100px;
  margin: 30px auto;
  top: 30px;
  border-radius: 50% !important;
}
.skills {
  text-align: left;
  margin-left: 40px;
}
</style>
