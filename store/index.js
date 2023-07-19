// import { getField, updateField } from 'vuex-map-fields'

// export const state = () => ({
//     weather: null,
//     loading: false,
//     error: null,
// })

// export const getters = {
//     getField,
// }

// export const mutations = {
//     updateField,
//   }

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: () => ({
      states: [],
      search_city: "",
      show_detail:""
    }),
    mutations: {
      increment(state) {
        fetch(
          "https://api.openweathermap.org/geo/1.0/direct?q=" +
            state.search_city +
            "&limit=5&appid=b8f5d5a3c8c40a270978a5686d277fbd",
          { method: "GET" }
        )
          .then((response) => {
            response.json().then((data) => {
              console.log(data);
              state.states = data;
            });
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
    actions: {},
  });
