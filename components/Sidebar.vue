<template>
  <section class="sidebar" float elevation="0">
    <v-app>
      <v-main>
        <v-card elevation="0">
          <v-navigation-drawer class="app__sidebar" width="375px" permanent>
            <v-list>
              <v-card class="sidebar__card" elevation="0">
                <v-text-field v-model="searchQuery" @blur="weather" loading="isloading"
                  prepend-inner-icon="mdi-map-marker-outline" placeholder="Add Location ..." @keyup.enter="searchLocation"
                  class="app__search" rounded hide-details="auto">
                </v-text-field>
                <v-snackbar v-model="snackbarShow" :timeout="3000" color="blue" :top="true">Please input current
                  location</v-snackbar>
                <recent-list />
              </v-card>
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
      searchQuery: "",
      items: [],
    };
  },
  props: {
    width: {
      type: [Number, String],
    },
  },
  methods: {
    async searchLocation() {
      const apiKey = "b8f5d5a3c8c40a270978a5686d277fbd";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${apiKey}`;
      console.log(apiUrl)

      let resp = null;
      await this.$axios
        .$get(apiUrl)
        .then((response) => {
          console.log(response);
          this.$store.dispatch("updateSharedData", response);
          resp = response;
          this.searchQuery = "";
        })
        .catch((error) => {
          console.error(error);
          this.snackbarShow = true;
        });

      if (resp != null) {
        await this.$axios
          .$get(`https://api.openweather.org/data/2.5/forecast?lat=${resp.coord.lat}&lon=${resp.coord.lon}&appid=${apiKey}`
          )
          .then((res) => {
            console.log(res);
          })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 375px;
  height: 100vh;

  &__card {
    padding: 30px 0px 30px 0px;
    background-color: #104084;
  }

  .v-list {
    padding: 0;
  }

  .app__sidebar {
    background-color: #104084;
  }

  .app__search {
    margin-right: 16px;
    margin-left: 13px;
    margin-bottom: 27px;
    background: rgba(37, 102, 163, 0.2);
    filter: none;
    border-radius: 10px !important;
    box-shadow: none;
    padding: 10px 0;
    border: 1px solid #377ce5;
  }
}</style>
