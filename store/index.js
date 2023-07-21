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
      let reversedArray = [...state.recentList].reverse();
      return reversedArray;
    },
};

export const mutations = {
  updateSharedData(state, payload) {
    state.sharedData = payload;
    state.recentList.push(payload);
  },
  updateForecastData(state, payload) {
    state.forecastData = payload;
    state.recentForecastList.push(payload);
  },
  updateCardSelection(state,index) {
    state.sharedData = state.recentList[index];
    state.forecastData = state.recentForecastList[index];
    state.index = index;
  },
  refresh(state, payload) {
    console.log(payload);
    state.recentList = payload.uploadList;
    state.recentForecastList = payload.updateForecastList;
    state.sharedData = state.recentList[state.index];
    state.getForecastData = state.recentForecastList[state.index];
  },
};
  export const actions = {
    updateSharedData({ commit }, newData) {
      commit("updateSharedData", newData);
    },
    updateForecastData({ commit }, newData) {
      commit("updateForecastData", newData);
    },
    updateCardSelection({ commit }, index) {
      commit("updateCardSelection", index);
    },
    refresh({ commit }, payload) {
      commit("refresh", payload)
    },
  };

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default {}