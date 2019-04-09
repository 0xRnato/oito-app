<template>
  <v-form>
    <h1>Login</h1>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.min]"
            label="Email"
            hint="At least 8 characters"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            label="Senha"
            hint="At least 8 characters"
            @click:append="show = !show"
          ></v-text-field>
          <v-btn @click="submit" round class="btn">Entrar</v-btn>
          <v-btn @click="clear" round class="btn">Limpar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      show: false,
      password: "",
      email: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 4 || "Min 4 characters"
      }
    };
  },
  methods: {
    ...mapActions(["actionLogin"]),
    submit() {
      this.actionLogin({ email: this.email, password: this.password });
    },
    clear() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.btn {
  color: white;
  background-color: #6550a1 !important;
}
h1 {
  color: #6550a1;
}
</style>

