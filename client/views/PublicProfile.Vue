<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex grid-list-md text-xs-center>
        PUBLIC PROFILE
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

export default {
  name: "Profile",
  components: {
    Contact,
    Tab1,
    Tab2,
    Tab3
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
  async created() {
    await this.actionGetCategories();
    await this.actionGetUserData();
    this.actionGetSkillsById(this.getUserData.category);
  }
};
</script>
