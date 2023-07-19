<template>
  <v-app class="app">
    <v-row no-gutters>
      <v-col cols="12" sm="4" md="3">
        <v-card outlined>
          <Sidebar />
        </v-card>
      </v-col>
      <v-col cols="6" md="9" style="width: 90%;">
        <v-card outlined tile>
          <div
            style="background: linear-gradient(180deg, rgba(8,36,79,1) 0%, rgba(19,76,181,1) 58%, rgba(11,66,171,1) 100%);">
            <v-main>
              <Nuxt />
            </v-main>
          </div>
        </v-card>
      </v-col>
    </v-row>


  </v-app>
</template>

<script>
import Vue from 'vue'
import VTooltip from 'v-tooltip'
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar },
  name: 'IndexPage',
}

</script>
<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: row;
}
</style>