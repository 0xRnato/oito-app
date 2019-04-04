<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer v-bind:links="links"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    links: [
      {
        title: 'Oportunidades',
        path: '/oportunidades',
      },

      {
        title: 'Quem Somos',
        path: '/quem-somos',
      },

      {
        title: 'Termos de Uso',
        path: '/termos-de-uso',
      },
    ],
  }),
};
</script>
