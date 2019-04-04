<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-center>
        <RegisterForm/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RegisterForm from "@/components/register/RegisterForm";

export default {
  name: "Register",
  components: {
    RegisterForm
  }
};
</script>
