<template>
  <v-container class="lighten-5" >
    <v-row>
      <v-col>
        <h2>sample</h2>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-expansion-panels accordion flat hover class="pb=4">
      <SampleComponents />
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Vue from "vue";
import SampleComponents from "@/components/SampleComponents.vue";


export default Vue.extend({
  components: {
    SampleComponents,
  }
})

</script>
