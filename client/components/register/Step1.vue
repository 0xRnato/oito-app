<template>
  <v-form>
    <h2>Dados da conta</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field :rules="[rules.required]" label="CPF"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Email"></v-text-field>
          <v-text-field
            :rules="[rules.required]"
            label="Senha"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <v-text-field
            :rules="[rules.required]"
            label="Confirmar"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Step1",
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

