<template>
  <v-flex>
    <div class="hidden-sm-and-down" pa-5 style="margin-top: 50px;">
      <h1>Precisa de Ajuda?</h1>
      <h2>Joga na OiTO</h2>
      <p>A OiTO estabelece conexões humanas que sejam mutualmente proveitosas</p>
    </div>
    <div class="hidden-md-and-up" style="margin-top: 100px">
      <h1>Precisa de Ajuda?</h1>
      <h2>Joga na OiTO</h2>
      <p>A OiTO estabelece conexões humanas que sejam mutualmente proveitosas</p>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "Cover"
};
</script>

<style scoped>
h1,
h2 {
  color: #654ea3;
  text-transform: uppercase;
}
h1 {
  font-weight: 300;
}
h2 {
  font-weight: 800;
}
p {
  text-transform: uppercase;
  color: #303030;
}
.hidden-sm-and-down h1,
.hidden-sm-and-down h2 {
  font-size: 65px;
}
.hidden-sm-and-down p {
  padding: 0 60px;
  font-size: 20px;
}
.hidden-md-and-up h1,
.hidden-md-and-up h2 {
  font-size: 35px;
  margin-top: 10px;
}
.hidden-md-and-up p {
  padding: 20px 10px;
  font-size: 20px;
}
</style>
