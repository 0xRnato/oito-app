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
            counter
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            label="Senha"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
          <v-btn @click="submit">Entrar</v-btn>
          <v-btn @click="clear">Limpar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      show: false,
      password: "",
      email: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    submit() {},
    clear() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
