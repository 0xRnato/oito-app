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
        path: '/search',
      },

      {
        title: 'Quem Somos',
        path: '/about',
      },

      {
        title: 'Termos de Uso',
        path: '/terms',
      },
    ],
  }),
};
</script>
