<template>
  <v-footer color="#f4f4f4" style="z-index: 99;margin-top: 100px;">
    <v-layout justify-center column fill-height class="hidden-sm-and-down">
      <v-container fluid grid-list-sm style="background-color: #f4f4f4;">
        <v-layout row>
          <v-layout column>
            <h3>A OiTO</h3>
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

    <v-layout justify-center column fill-height class="hidden-md-and-up" style="margin-top: 150px;">
      <v-container fluid grid-list-sm style="background-color: #f4f4f4;padding: 0;">
        <v-layout row>
          <v-flex column>
            <h3>A OiTO</h3>
            <v-flex v-for="(link, index) in links" :key="index" xs12 style="text-align: center;">
              <v-btn color="black" flat round>
                <router-link :to="link.path">{{link.title}}</router-link>
              </v-btn>
            </v-flex>
            <v-flex
              text-xs-center
              xs12
              class="line"
              style="margin-bottom: 50px;"
            >2019 &copy; OITO CORP</v-flex>
            <v-bottom-nav :value="true" fixed class="bottom-nav">
              <router-link to="/">
                <v-btn color="orange" flat value="home">
                  <span>Home</span>
                  <v-icon>home</v-icon>
                </v-btn>
              </router-link>
              <router-link to="/login">
                <v-btn color="orange" flat value="login">
                  <span>Entrar</span>
                  <v-icon>fas fa-sign-in-alt</v-icon>
                </v-btn>
              </router-link>
              <router-link to="/register">
                <v-btn color="orange" flat value="register">
                  <span>Registrar</span>
                  <v-icon>fas fa-user-plus</v-icon>
                </v-btn>
              </router-link>
            </v-bottom-nav>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
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
h3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #ff974f;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.hidden-sm-and-down h3 {
  text-align: left;
}
.hidden-md-and-up h3 {
  text-align: center;
}
.bottom-nav {
  background-color: #6550a1;
}
.theme--light.v-bottom-nav .v-btn:not(.v-btn--active) {
  color: rgba(255, 255, 255, 0.9) !important;
}
</style>
