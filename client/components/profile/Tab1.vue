<template>
  <div>
    <v-container column>
      <h2>Dados Pessoais</h2>
      <v-layout row>
        <v-flex md7>
          <v-text-field disabled label="Nome Completo" :value="userData.name ? userData.name : ''"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            label="CPF"
            mask="###.###.###-##"
            :value="userData.documentNumber ? userData.documentNumber : ''"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            label="Data de nascimento"
            :value="userData.birthdate ? userData.birthdate : ''"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md12>
          <v-textarea :value="userData.bio ? userData.bio : ''" disabled label="Bio"></v-textarea>
        </v-flex>
      </v-layout>
      <h2>Endereço</h2>
      <v-layout row>
        <v-flex md2>
          <v-text-field
            mask="#####-###"
            disabled
            label="CEP"
            :value="userData.address ? userData.address.zipcode : ''"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md5>
          <v-text-field
            disabled
            label="Rua"
            :value="userData.address ? userData.address.street : ''"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.number : ''"
            label="Número"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.complement : ''"
            label="Complemento"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md4>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.neighborhood : ''"
            label="Bairro"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md3>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.city : ''"
            label="Cidade"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.state : ''"
            label="Estado"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field
            disabled
            :value="userData.address ? userData.address.country : ''"
            label="País"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Contato</h2>
      <v-layout row>
        <v-flex md4>
          <v-text-field :value="userData.phone ? userData.phone : ''" disabled label="Telefone"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Habilidades</h2>
      <v-layout row>
        <v-flex md4>
          <v-text-field
            disabled
            :value="userData.category ? getCategoryName(userData.category) : ''"
            label="Categoria"
          ></v-text-field>
        </v-flex>
        <v-flex class="skills">
          <v-chip v-for="(skill, index) in getUserSkills(userData.skills)" :key="index">{{skill}}</v-chip>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tab1",
  props: ["userData"],
  computed: {
    ...mapGetters(["getCategoryName", "getUserSkills"])
  }
};
</script>

<style scoped>
h2 {
  color: #6550a1;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 20px;
}
.skills {
  text-align: left;
  margin-left: 40px;
}
</style>

