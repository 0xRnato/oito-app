<template>
  <v-form>
    <h2>Dados da pessoais</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-text-field :rules="[rules.required]" v-model="name" label="Nome Completo"></v-text-field>
          <v-text-field v-model="phone" label="Telefone"></v-text-field>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Data de Nascimento"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="birthdate" no-title @input="menu = false"></v-date-picker>
          </v-menu>
          <v-text-field v-model="bio" label="Bio"></v-text-field>
          <div style="display: inline-flex;">
            <h3 style="margin-right: 30px;">Foto de perfil:</h3>
            <input @change="uploadImage" type="file" name="profileImage" accept="image/*">
          </div>
          <v-btn style="margin-top: 30px" class="btn" flat round large @click="submit">Continuar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Step2",
  data() {
    return {
      rules: {
        required: value => !!value || "Campo obrigatório"
      },
      birthdate: new Date().toISOString().substr(0, 10),
      menu: false,
      name: "",
      bio: "",
      phone: "",
      profileImage: {
        fileName: "",
        data: ""
      }
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.birthdate);
    }
  },
  methods: {
    ...mapActions(["actionUpdateUserRegister"]),
    submit() {
      this.actionUpdateUserRegister({
        birthdate: this.birthdate,
        name: this.name,
        bio: this.bio,
        profileImage: this.profileImage,
        phone: this.phone
      });
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    uploadImage() {
      const self = this;
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        self.profileImage.data = e.target.result;
      };
      reader.onerror = function(error) {
        alert(error);
      };
      this.profileImage.fileName = file.name;
      reader.readAsDataURL(file);
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
.v-menu__content {
  z-index: 9999 !important;
}
</style>
