<template>
  <v-container column text-xs-center>
    <v-layout row>
      <v-flex md4>
        <v-list two-line>
          <v-btn
            class="btn"
            @click="selectChat(propose)"
            v-for="(propose, index) in getProposes"
            :key="`${index}-btn`"
          >
            <v-list-tile style="width: 100%;height: 100%;" :key="`${index}-avatar`" avatar>
              <v-list-tile-avatar>
                <img :src="propose.from.profileImage.data">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="propose.from.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="propose.offerId.title"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-btn>
        </v-list>
      </v-flex>
      <v-flex md8>AAAAA</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tab4",
  computed: {
    ...mapGetters(["getProposes"])
  },
  methods: {
    ...mapActions(["actionGetPropose"]),
    submit() {},
    selectChat(propose) {
      console.log(propose);
    }
  },
  created() {
    this.actionGetPropose();
  }
};
</script>

<style scoped>
h2 {
  color: #6550a1;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  width: 100%;
  height: 100%;
}
.icon-profile {
  color: #ff974f;
  margin-right: 10px;
}
</style>
