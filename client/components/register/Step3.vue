<template>
  <v-form>
    <h2>Endereço</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field :rules="[rules.required]" label="CEP"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Rua"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Número"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Complemento"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Bairro"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Cidade"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Estado"></v-text-field>
          <v-text-field :rules="[rules.required]" label="País"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Step3",
  data() {
    return {
      show: false,
      e1: 0,
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    submit() {},
    clear() {}
  }
};
</script>

<style scoped>
h2 {
  color: #6550a1;
}
</style>
