export const state = () => ({
    sharedData: "",
    forecastData: "",
    recentList: [],
    recentForecastList: [],
    index: 0,
});

export const getters = {
    getSharedData(state) {
      return state.sharedData;
    },
    getForecastData(state) {
      return state.getForecastData;
    },
    getRecentList(state) {

    }
};



import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default {}