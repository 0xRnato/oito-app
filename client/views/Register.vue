<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-center>
        <h1>Crie sua conta</h1>
        <RegisterSteps/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RegisterSteps from "@/components/register/RegisterSteps";

export default {
  name: "Register",
  components: {
    RegisterSteps
  }
};
</script>

<style scoped>
h1 {
  color: #ff974f;
}
</style>
