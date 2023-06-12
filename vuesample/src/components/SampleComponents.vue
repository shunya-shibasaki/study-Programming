<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0">
      <h3>サンプルコンポーネント</h3>
    </v-expansion-panel-header>
  <v-expansion-panel-content>
    
  </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Vue from "vue";
import FilterSample from "@/components/FilterSample.vue"
import SampleCalendar from "@/components/SampleCalendar.vue"

export default Vue.extend({
  components: {
    FilterSample,
    SampleCalendar,
  }
})
</script>
