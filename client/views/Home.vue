<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs-12 class="hero right">
        <h2>Oi, preciso de ajuda</h2>
        <h5>ENCONTRE O PROFISSIONAL IDEAL PARA TE AJUDAR.</h5>
      </v-flex>
      <v-flex xs-12 class="hero left">
        <h2>Oi, eu posso ajudar</h2>
        <h5>OFEREÇA SEUS SERVIÇOS PARA QUEM PRECISA.</h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.right {
  text-align: right;
  background-image: url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
}

.left {
  text-align: left;
  background-image: url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
}

.hero {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  background-size: cover;
  height: 300px;
  padding: 10px;
  transition: 0.6s;
}

.hero:hover {
  transform: scale(1.2);
}
</style>

