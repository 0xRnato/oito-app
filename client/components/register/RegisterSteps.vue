<template>
  <v-stepper :value="getRegisterStep">
    <v-stepper-header>
      <v-stepper-step :complete="getRegisterStep > 1" step="1">
        <span class="stepper">Dados da Conta</span>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="getRegisterStep > 2" step="2">
        <span class="stepper">Dados da pessoais</span>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="getRegisterStep > 3" step="3">
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
      </v-stepper-content>
      <v-stepper-content step="2">
        <Step2/>
      </v-stepper-content>
      <v-stepper-content step="3">
        <Step3/>
      </v-stepper-content>
      <v-stepper-content step="4">
        <Step4/>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getRegisterStep"]),
  }
};
</script>

<style scoped>
.stepper {
  color: #ff974f;
}
</style>
