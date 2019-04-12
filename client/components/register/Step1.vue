<template>
  <v-form>
    <h2>Dados da conta</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field
            :rules="[rules.required, rules.cpf]"
            mask="###.###.###-##"
            label="CPF"
            v-model="documentNumber"
          ></v-text-field>
          <v-text-field :rules="[rules.required, rules.email]" label="Email" v-model="email"></v-text-field>
          <v-text-field
            :rules="[rules.required]"
            label="Senha"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            v-model="password"
          ></v-text-field>
          <v-text-field
            :rules="[rules.required]"
            label="Confirmar senha"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            v-model="confirmPassword"
          ></v-text-field>
          <v-btn class="btn" flat round large @click="submit">Continuar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { validateCPF, validateEmail } from "@/helpers.js";

export default {
  name: "Step1",
  data() {
    return {
      documentNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      show: false,
      rules: {
        required: value => !!value || "Campo obrigatório",
        cpf: value => validateCPF(value) || "Digite um CPF válido",
        email: value => validateEmail(value) || "Digite um Email válido"
      }
    };
  },
  methods: {
    ...mapActions(["actionRegisterUser"]),
    submit() {
      if (this.password === this.confirmPassword) {
        this.actionRegisterUser({
          email: this.email,
          password: this.password,
          documentNumber: this.documentNumber
        });
      } else {
        console.error("Digite a mesma senha");
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: #6550a1;
}
.btn {
  background-color: #6550a1;
  color: white;
}
</style>
