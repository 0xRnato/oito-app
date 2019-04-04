<template>
  <v-footer height="auto" color="#f4f4f4">
    <v-layout justify-center column fill-height>
      <v-container fluid grid-list-sm>
        <v-layout row>
          <v-layout column>
            <v-flex v-for="(link, index) in links" :key="index" xs6>
              <v-btn color="black" flat round>
                <router-link :to="link.path">{{link.title}}</router-link>
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
        py-3
        text-xs-center
        xs12
        class="line"
      >2019 &copy; OITO CORP - CNPJ 10.140.360.0001-42 | RUA AL. JOAQUIM EUGÊNIO, 696, 17º ANDAR - JARDINS, SÃO PAULO - SP</v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      {
        title: "Oportunidades",
        path: "/search"
      },
      {
        title: "Quem Somos",
        path: "/about"
      },
      {
        title: "Termos de Uso",
        path: "/terms"
      }
    ]
  })
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #6550a1;
}
.line {
  background-color: #6550a1;
  color: white;
}
</style>
