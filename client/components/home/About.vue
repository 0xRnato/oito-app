<template>
  <div>
    <v-layout row wrap pa-5 class="hidden-sm-and-down" style="margin-top: 20px; margin-bottom: 100px;">
      <v-flex md6 text-xs-left>
        <h3>QUEM SOMOS</h3>
        <p>A Oito nasceu do desejo de conectar pessoas e oportunidades. Profissionais autônomos divulgam seus serviços e se conectam com clientes que procuram soluções. Tudo de forma clara, rápida, justa e proveitosas para os dois lados.</p>
      </v-flex>
      <v-flex md6>
        <v-btn flat round large class="btn">
          <router-link to="/about">CONHEÇA +</router-link>
        </v-btn>
      </v-flex>
    </v-layout>
    <div class="hidden-md-and-up">
      <v-flex text-xs-left>
        <h3>QUEM SOMOS</h3>
        <p>A Oito nasceu do desejo de conectar pessoas e oportunidades. Profissionais autônomos divulgam seus serviços e se conectam com clientes que procuram soluções. Tudo de forma clara, rápida, justa e proveitosas para os dois lados.</p>
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.btn {
  background-color: #6550a1;
}
h3 {
  text-align: left;
  text-transform: uppercase;
  color: #ff974f;
  font-weight: 350;
  font-size: 52px;
}
p {
  text-align: left;
  color: #303030;
  line-height: 26px;
  font-size: 18px;
}
.hidden-sm-and-down h3 {
  padding: 0 20px 0 200px;
  margin-bottom: 10px;
}
.hidden-sm-and-down p {
  padding: 0 20px 0 200px;
  margin-bottom: 20px;
}
.hidden-md-and-up h3 {
  margin-top: 40px;
}
</style>
