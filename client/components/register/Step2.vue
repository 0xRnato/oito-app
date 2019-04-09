<template>
  <v-form>
    <h2>Dados da pessoais</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field :rules="[rules.required]" label="Nome Completo"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Telefone"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Data de Nascimento"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Bio"></v-text-field>
          <input type="file">
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Step2",
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
