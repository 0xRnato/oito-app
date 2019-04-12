<template>
  <v-form>
    <h2>Habilidades</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>
          <v-select
            :items="getCategories"
            label="Categoria"
            @change="findSkills"
            hint="Se você está aqui apenas para contratar serviços, pode pular essa etapa."
            :persistent-hint="true"
            v-model="category"
          ></v-select>
          <v-checkbox
            v-for="(skill, index) in getSkills"
            :label="skill.displayName"
            :key="index"
            :value="skill.name"
            v-model="skills"
          ></v-checkbox>
          <v-btn class="btn" flat round large @click="submit" style="margin-top: 30px;">Finalizar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Step4",
  data() {
    return {
      category: "",
      skills: [],
      rules: {
        required: value => !!value || "Campo obrigatório"
      }
    };
  },
  computed: {
    ...mapGetters(["getCategories", "getSkills"])
  },
  methods: {
    ...mapActions([
      "actionGetCategories",
      "actionGetSkills",
      "actionFinishUserRegister"
    ]),
    findSkills() {
      this.skills = [];
      this.actionGetSkills(this.category);
    },
    submit() {
      this.actionFinishUserRegister({
        category: this.category,
        skills: this.skills
      });
    }
  },
  created() {
    this.actionGetCategories();
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
