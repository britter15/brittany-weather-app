<template>
  <!--- set to refresh every 5 minutes use built in js interval in the mounted lifecycle hook - need to update the timeout method-->
  <section class="sidebar" float elevation="0">
    <v-app>
      <v-main>
      <v-card elevation="0">
        <v-navigation-drawer class="app__sidebar" width="375px" permanent>
          <v-list>
            <v-card class="sidebar__card" elevation="0">
              <v-text-field v-model="searchQuery" @blur="weather" loading="isloading" prepend-inner-icon="mdi-map-marker-outline"
            placeholder="Add Location ..." @keyup.enter="searchLocation" class="app__search" rounded hide-details="auto">
          </v-text-field>
            </v-card>
          <recent-list />
          </v-list>
        </v-navigation-drawer>
      </v-card>
      </v-main>
    </v-app>
  </section>
</template>
<script>
import RecentList from './RecentList.vue';
import Snackbar from './Snackbar.vue';

export default {
  components: { RecentList, Snackbar },
  data() {
    return {
      searchQuery: '',
      cities : {}
    };
  },
  methods: {
    weather() {
      this.$store.state.search_city = this.searchQuery
      this.$store.commit('increment')
    }
  }
}
// https://api.openweathermap.org/geo/1.0/direct?q=Tampa&limit=5&appid=b8f5d5a3c8c40a270978a5686d277fbd
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 375px;
  display: inline-block;
}
</style>
