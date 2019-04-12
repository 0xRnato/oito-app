<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex grid-list-md text-xs-center>
        <v-tabs grow color="#FAFAFA" slider-color="#6550a1">
          <v-tab>Profissionais</v-tab>
          <v-tab>Vagas</v-tab>
          <v-tab-item>
            <Tab1/>
          </v-tab-item>
          <v-tab-item>
            <Tab2/>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Tab1 from "@/components/search/Tab1.vue";
import Tab2 from "@/components/search/Tab2.vue";

export default {
  name: "Search",
  components: {
    Tab1,
    Tab2
  },
  methods: {
    // ...mapActions([])
  },
  computed: {
    // ...mapGetters([])
  },
  created() {}
};
</script>
