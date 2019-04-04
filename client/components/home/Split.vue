<template>
  <v-layout row wrap>
    <v-flex md6 class="container">
      <img style="width: 100%;" src="@/assets/preciso-ajuda.jpg">
      <div class="centered">
        <h1>Oi, preciso de ajuda</h1>
        <h2>Encontre o profissional ideal para te ajudar.</h2>
      </div>
    </v-flex>
    <v-flex md6 class="container">
      <img style="width: 100%;" src="@/assets/posso-ajudar.jpg">
      <div class="centered">
        <h1>Oi, eu posso ajudar</h1>
        <h2>Ofereça seu serviço para quem precisa.</h2>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Split"
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: #ffffff;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
