<template>
  <v-form>
    <h1>Register</h1>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <h2>Dados da conta</h2>
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
        <v-flex md4 offset-md4>
          <h2>Dados da pessoais</h2>
          <v-text-field :rules="[rules.required]" label="Nome Completo"></v-text-field>
          <v-text-field :rules="[rules.required]" label="CPF"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Telefone"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Data de Nascimento"></v-text-field>
          <v-textarea label="Bio" value></v-textarea>
          <input type="file">
        </v-flex>
        <v-flex md4 offset-md4>
          <h2>Endereço</h2>
          <v-text-field :rules="[rules.required]" label="CEP"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Rua"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Número"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Complemento"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Bairro"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Cidade"></v-text-field>
          <v-text-field :rules="[rules.required]" label="Estado"></v-text-field>
          <v-text-field :rules="[rules.required]" label="País"></v-text-field>
        </v-flex>
        <v-flex md4 offset-md4>
          <h2>Habilidades</h2>
        </v-flex>
        <v-flex md4 offset-md4>
          <v-btn @click="submit">Criar Conta</v-btn>
          <v-btn @click="clear">Limpar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      show: false,
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
