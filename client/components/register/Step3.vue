<template>
  <v-form>
    <h2>Endereço</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field v-model="address.zipcode" mask="#####-###" @blur="findZipcode" label="CEP"></v-text-field>
          <v-text-field v-model="address.street" label="Rua"></v-text-field>
          <v-text-field v-model="address.number" label="Número"></v-text-field>
          <v-text-field v-model="address.complement" label="Complemento"></v-text-field>
          <v-text-field v-model="address.neighborhood" label="Bairro"></v-text-field>
          <v-text-field v-model="address.city" label="Cidade"></v-text-field>
          <v-text-field v-model="address.state" label="Estado"></v-text-field>
          <v-text-field v-model="address.country" label="País"></v-text-field>
          <v-btn style="margin-top: 30px" class="btn" flat round large @click="submit">Continuar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import cep from "cep-promise";

export default {
  name: "Step3",
  data() {
    return {
      rules: {
        required: value => !!value || "Campo obrigatório"
      },
      address: {
        zipcode: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
        country: ""
      }
    };
  },
  methods: {
    ...mapActions(["actionUpdateUserRegister"]),
    submit() {
      this.actionUpdateUserRegister({
        address: this.address
      });
    },
    async findZipcode() {
      const result = await cep(this.address.zipcode);
      this.address.city = result.city;
      this.address.neighborhood = result.neighborhood;
      this.address.state = result.state;
      this.address.street = result.street;
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
