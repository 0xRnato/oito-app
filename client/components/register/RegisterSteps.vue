<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        <span class="stepper">Dados da Conta</span>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">
        <span class="stepper">Dados da pessoais</span>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">
        <span class="stepper">Endereço</span>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">
        <span class="stepper">Habilidades</span>
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <Step1/>
        <v-btn class="btn" flat round large @click="e1 = 2">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <Step2/>
        <v-btn class="btn" flat round large @click="e1 = 3">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <Step3/>
        <v-btn class="btn" flat round large @click="e1 = 4">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <Step4/>
        <v-btn class="btn" flat round large @click="e1 = 1">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Step1 from "@/components/register/Step1.vue";
import Step2 from "@/components/register/Step2.vue";
import Step3 from "@/components/register/Step3.vue";
import Step4 from "@/components/register/Step4.vue";

export default {
  name: "RegisterSteps",
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
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
.stepper {
  color: #ff974f;
}
.btn {
  background-color: #6550a1;
  color: white;
}
</style>
