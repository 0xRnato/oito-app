<template>
  <v-layout row wrap pa-5>
    <v-flex md6 text-xs-left>
      <h1>QUEM SOMOS</h1>
      <p>A Oito nasceu do desejo de conectar pessoas e oportunidades. Profissionais autônomos divulgam seus serviços e se conectam com clientes que procuram soluções. Tudo de forma clara, rápida, justa e proveitosas para os dois lados.</p>
    </v-flex>
    <v-flex md6>
      <v-btn flat round large class="btn">
        <router-link to="/about">CONHEÇA +</router-link>
      </v-btn>
    </v-flex>
  </v-layout>
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
h1 {
  color: #EF974F;
}
</style>
