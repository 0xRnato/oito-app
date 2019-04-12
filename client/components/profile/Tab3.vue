<template>
  <v-container column text-xs-center>
    <v-layout row>
      <v-flex md3 sm12 v-for="(offer, index) in getOffersEmployerByUser" :key="index">
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12>
                <span class="headline">{{offer.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div>
              <span>{{offer.description}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <div>
              <v-icon class="icon-profile">attach_money</v-icon>
              {{offer.value}}
            </div>
            <div style="margin-left: 30px;">
              <v-icon class="icon-profile">access_time</v-icon>
              {{offer.deadline}}
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="btn" flat round large v-on="on" style="margin-top: 30px;">Criar anúncio</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Novo Anúncio</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex md7>
                <v-text-field label="Titulo" required v-model="title"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md2>
                <v-text-field label="Valor" required v-model="value"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md2>
                <v-text-field label="Prazo" hint="dias" required v-model="deadline"></v-text-field>
              </v-flex>
              <v-flex md12>
                <v-textarea label="Descrição" required v-model="description"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn" flat round large @click="submit">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tab3",
  data() {
    return {
      title: "",
      value: "",
      deadline: "",
      description: "",
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getOffersEmployerByUser"])
  },
  methods: {
    ...mapActions(["actionOffersEmployerByUser", "actionCreateOffer"]),
    submit() {
      this.actionCreateOffer({
        title: this.title,
        deadline: this.deadline,
        description: this.description,
        value: this.value,
        type: "EMPLOYER"
      });
      this.dialog = false;
      this.title = "";
      this.deadline = "";
      this.description = "";
      this.value = "";
    }
  },
  created() {
    this.actionOffersEmployerByUser();
  }
};
</script>

<style scoped>
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
  color: #ff974f;
  margin-right: 10px;
}
</style>
