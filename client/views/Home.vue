<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center text-xs-center row wrap>
      <v-flex md12>
        <Cover/>
      </v-flex>
      <v-flex md12>
        <Split/>
      </v-flex>
      <v-flex md12>
        <About/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Cover from "@/components/home/Cover";
import Split from "@/components/home/Split";
import About from "@/components/home/About";

export default {
  name: "Home",
  components: {
    Cover,
    Split,
    About
  }
};
</script>
