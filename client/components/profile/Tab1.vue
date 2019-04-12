<template>
  <form ref="updateProfileForm" v-on:="">
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
          <v-textarea v-model="userData.bio" @blur="handleBlur" label="Bio"></v-textarea>
        </v-flex>
      </v-layout>
      <h2>Endereço</h2>
      <v-layout row v-if="userData.address && userData.address.zipcode">
        <v-flex md2>
          <v-text-field
            mask="#####-###"
            label="CEP"
            @blur="findZipcode"
            v-model="userData.address.zipcode"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md5>
          <v-text-field label="Rua" @blur="handleBlur" v-model="userData.address.street"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field v-model="userData.address.number" @blur="handleBlur" label="Número"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field v-model="userData.address.complement" @blur="handleBlur" label="Complemento"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row v-if="userData.address && userData.address.zipcode">
        <v-flex md4>
          <v-text-field @blur="handleBlur" v-model="userData.address.neighborhood" label="Bairro"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md3>
          <v-text-field @blur="handleBlur" v-model="userData.address.city" label="Cidade"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field @blur="handleBlur" v-model="userData.address.state" label="Estado"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2>
          <v-text-field @blur="handleBlur" v-model="userData.address.country" label="País"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Contato</h2>
      <v-layout row>
        <v-flex md4>
          <v-text-field @blur="handleBlur" v-model="userData.phone" label="Telefone"></v-text-field>
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
      <v-btn
        class="btn"
        flat
        round
        large
        :disabled="getProfileButton"
        @click="submit"
        style="margin-top: 30px;"
      >Salvar Alterações</v-btn>
    </v-container>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cep from "cep-promise";

export default {
  name: "Tab1",
  props: ["userData"],
  computed: {
    ...mapGetters(["getCategoryName", "getUserSkills", "getProfileButton"])
  },
  methods: {
    ...mapActions(["actionUpdateUserProfile", "actionChangeProfileButton"]),
    submit() {
      this.actionUpdateUserProfile({
        bio: this.userData.bio,
        address: this.userData.address,
        phone: this.userData.phone,
      });
    },
    async findZipcode() {
      const result = await cep(this.userData.address.zipcode);
      this.userData.address.city = result.city;
      this.userData.address.neighborhood = result.neighborhood;
      this.userData.address.state = result.state;
      this.userData.address.street = result.street;
    },
    handleBlur() {
      if (this.getProfileButton) {
        this.actionChangeProfileButton();
      }
    }
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
.btn {
  background-color: #6550a1;
  color: white;
}
</style>
