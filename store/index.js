export const state = () => ({
  sharedData: "",
  forecastData: "",
  todayHourlyData: "",
  recentList: [],
  recentForecastList: [],
  recentTodayHourlyList: [],
  index: 0,
});

export const getters = {
  getSharedData(state) {
    return state.sharedData;
  },
  getForecastData(state) {
    return state.forecastData;
  },
  getRecentList(state) {
    let reversedArray = [...state.recentList].reverse();
    return reversedArray;
  },
  getTodayHourlyData(state) {
    return state.todayHourlyData;
  }
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
  updateTodayHourlyData(state, payload) {
    state.todayHourlyData = payload;
    state.recentTodayHourlyList.push(payload);
  },
  updateCardSelection(state, index) {
    state.sharedData = state.recentList[index];
    state.forecastData = state.recentForecastList[index];
    state.todayHourlyData = state.recentTodayHourlyList[index];
    state.index = index;
  },
  refresh(state, payload) {
    console.log(payload);
    state.recentList = payload.updatedList;
    state.recentForecastList = payload.updatedForecastList;
    state.sharedData = state.recentList[state.index];
    state.forecastData = state.recentForecastList[state.index];
    state.todayHourlyData = state.recentTodayHourlyList[state.index]
  },
};

export const actions = {
  updateSharedData({ commit }, newData) {
    commit("updateSharedData", newData);
  },
  updateForecastData({ commit }, newData) {
    commit("updateForecastData", newData);
  },
  updateTodayHourlyData({ commit }, newData) {
    commit("updateTodayHourlyData", newData);
  },
  updateCardSelection({ commit }, index) {
    commit("updateCardSelection", index);
  },
  refresh({ commit }, payload) {
    commit("refresh", payload);
  },
};
