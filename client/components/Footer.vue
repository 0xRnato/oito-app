<template>
  <v-footer height="auto" color="#f4f4f4">
    <v-layout justify-center column fill-height>
      <v-container fluid grid-list-sm>
        <v-layout row>
          <v-layout column>
            <v-flex v-for="(link, index) in links" :key="index" xs6>
              <v-btn color="black" flat round>
                <router-link :to="link.path"/>
                {{link.title}}
              </v-btn>
            </v-flex>
          </v-layout>
          <v-flex xs6>
            <v-card dark tile flat color="#f4f4f4">
              <router-link to="/">
                <img src="@/assets/logo.png">
              </router-link>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >2019 &copy; OITO CORP - CNPJ 10.140.360.0001-42 | RUA AL. JOAQUIM EUGÊNIO, 696, 17º ANDAR - JARDINS, SÃO PAULO - SP</v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  props: ["links"]
};
</script>

<style scoped>
  img {
    max-height: 100px
  }
</style>
