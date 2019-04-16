<template>
  <v-container column text-xs-center>
    <v-layout row>
      <v-text-field v-model="search" label="Pesquisar" md10></v-text-field>
    </v-layout>
    <v-layout row>
      <v-flex md3 sm12 v-for="(offer, index) in filteredItems" :key="index">
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
            <v-btn class="btn" flat round @click="selectUser(offer)">
              <v-icon class="icon-profile">info</v-icon>Info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog max-width="600px" v-model="dialog">
      <v-card>
        <v-card-title>
          <v-flex md2>
            <img
              class="img-profile"
              v-if="selectedOffer.user && selectedOffer.user.profileImage"
              v-bind:src="selectedOffer.user.profileImage"
            >
          </v-flex>
          <v-flex md10 style="padding-left: 20px;">
            <h1>{{selectedOffer.user.name}}</h1>
            <div
              v-if="selectedOffer.user && selectedOffer.user.address && selectedOffer.user.address.city && selectedOffer.user.address.state && selectedOffer.user.address.country"
            >
              <v-icon class="icon-profile">location_on</v-icon>
              <span>{{selectedOffer.user.address.city}} - {{selectedOffer.user.address.state}} / {{selectedOffer.user.address.country}}</span>
            </div>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex md7>
                <v-text-field label="Titulo" disabled :value="selectedOffer.title"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md2>
                <v-text-field label="Valor" disabled :value="selectedOffer.value"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md2>
                <v-text-field label="Prazo" hint="dias" disabled :value="selectedOffer.deadline"></v-text-field>
              </v-flex>
              <v-flex md12>
                <v-textarea label="Descrição" disabled :value="selectedOffer.description"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btn"
            flat
            round
            large
            @click="submit"
            style="margin-right: 20px;margin-bottom: 20px;"
          >Negociar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tab1",
  data() {
    return {
      search: "",
      dialog: false,
      selectedOffer: {
        title: "",
        value: "",
        deadline: "",
        description: "",
        user: {
          id: "",
          address: {},
          bio: "",
          category: "",
          profileImage: "",
          skills: []
        }
      }
    };
  },
  computed: {
    ...mapGetters(["getOffersEmployerAll", "getUserSkills"]),
    filteredItems() {
      return this.getOffersEmployerAll.filter(item => {
        return (
          item.user.name.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          item.user.address.city
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 ||
          item.user.address.state
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 ||
          item.user.address.country
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    }
  },
  methods: {
    ...mapActions(["actionOffersEmployerAll", "actionCreatePropose"]),
    selectUser(offer) {
      this.dialog = true;
      this.selectedOffer = offer;
    },
    submit() {
      this.actionCreatePropose({
        to: this.selectedOffer.user.id,
        offerId: this.selectedOffer.id
      });
      this.dialog = false;
    }
  },
  created() {
    this.actionOffersEmployerAll();
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
  margin: 0 auto;
}
.icon-profile {
  color: #ff974f;
  margin-right: 10px;
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
