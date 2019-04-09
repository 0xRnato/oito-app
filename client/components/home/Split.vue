<template>
  <div>
    <v-layout row wrap class="hidden-sm-and-down">
      <v-flex md6 class="container">
        <router-link to="/">
          <img style="width: 100%;" src="@/assets/preciso-ajuda.jpg">
          <div class="centered left">
            <h2>Oi, preciso de ajuda</h2>
            <h5>Encontre o profissional ideal para te ajudar.</h5>
          </div>
        </router-link>
      </v-flex>
      <v-flex md6 class="container">
        <router-link to="/">
          <img style="width: 100%;" src="@/assets/posso-ajudar.jpg">
          <div class="centered right">
            <h2>Oi, eu posso ajudar</h2>
            <h5>Ofereça seu serviço para quem precisa.</h5>
          </div>
        </router-link>
      </v-flex>
    </v-layout>
    <div class="hidden-md-and-up">
      <img style="width: 100%;" src="@/assets/vector-home.png">
      <p class="call-to-action-mobile">Encontre o profissional ideal para te ajudar.</p>
      <v-btn flat round large class="btn">
        <router-link to="/">ENCONTRAR OPORTUNIDADES</router-link>
      </v-btn>
    </div>
  </div>
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
  padding: 0;
  color: #ffffff;
  transition: transform 1s;
}
.container:hover {
  transform: scale(1.1);
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  opacity: 0.85;
  z-index: 5;
}
.left {
  background: #6550a1;
}
.right {
  background: #ff974f;
}
h2 {
  font-size: 72px;
  font-weight: 500;
  color: #fff;
  padding: 20px 40px 0 240px;
  position: relative;
  z-index: 6;
}
h5 {
  text-transform: uppercase;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  margin-top: 20px;
  position: relative;
  z-index: 6;
}
.call-to-action-mobile {
  font-size: 16px;
  line-height: 20px;
  color: #303030;
  display: block;
  padding: 0;
}
.btn {
  background-color: #6550a1;
}
a {
  text-decoration: none;
  color: white;
}
</style>
