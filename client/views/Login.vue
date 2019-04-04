<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-center>
        <LoginForm/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>
