<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout align-left justify-center column fill-height>
      <v-flex>
      <v-btn v-for="link in links" :key="link" color="white" flat round><router-link :to="link.path"/>{{link.title}}</v-btn>
      </v-flex>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >2019 &copy; OITO CORP - CNPJ 10.140.360.0001-42 | RUA AL. JOAQUIM EUGÊNIO, 696, 17º ANDAR - JARDINS, SÃO PAULO - SP</v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  props: ['links'],
};
</script>
