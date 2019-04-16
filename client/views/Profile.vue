<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex grid-list-md text-xs-center>
        <Contact v-bind:userData="getUserData"/>
        <v-tabs grow color="#FAFAFA" slider-color="#6550a1">
          <v-tab>Minha Conta</v-tab>
          <v-tab>Prestar de serviços</v-tab>
          <v-tab>Contratar serviços</v-tab>
          <v-tab>Propostas</v-tab>
          <v-tab-item>
            <Tab1 v-bind:userData="getUserData"/>
          </v-tab-item>
          <v-tab-item>
            <Tab2/>
          </v-tab-item>
          <v-tab-item>
            <Tab3/>
          </v-tab-item>
          <v-tab-item>
            <Tab4/>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Contact from "@/components/profile/Contact.vue";
import Tab1 from "@/components/profile/Tab1.vue";
import Tab2 from "@/components/profile/Tab2.vue";
import Tab3 from "@/components/profile/Tab3.vue";
import Tab4 from "@/components/profile/Tab4.vue";

export default {
  name: "Profile",
  components: {
    Contact,
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  methods: {
    ...mapActions([
      "actionGetUserData",
      "actionGetCategories",
      "actionGetSkillsById"
    ])
  },
  computed: {
    ...mapGetters(["getUserData"])
  },
  created() {
    this.actionGetCategories();
    this.actionGetUserData();
    this.actionGetSkillsById(this.getUserData.category);
  }
};
</script>
