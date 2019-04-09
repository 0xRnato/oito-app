<template>
  <v-form>
    <h2>Habilidades</h2>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md4 offset-md4>

        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Step4",
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
