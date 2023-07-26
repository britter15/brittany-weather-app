<template>
  <section class="today" v-if="todayHourlyData">
    <v-card class="today-card" elevation="0">
      <v-container style="background-color: #104084; padding-bottom: 30px; padding-top: 30px;">
        <v-row no-gutters>
          <v-col cols="6">
            <h2 class="today-card__title">Today</h2>
          </v-col>
          <v-col cols="6">
            <p class="today-card__date">{{ $moment().format("MMMM, DD") }}</p>
          </v-col>
          <div v-if="todayHourlyData">

          </div>
          <v-col
            class="today-card__main"
            cols="1.5"
            v-for="(data, index) in todayHourlyData.slice(0, 10)"
            :key="index"
          >
            <div class="d-flex">
              <p class="today-card__degrees">
                {{ Math.round(data.temp - 273.15) }}&deg;C
              </p>
            </div>
            <div class="d-flex">
              <img
                :src="getImageSrc(data.weather[0].icon)"
                class="today-card__graphic"
                alt=""
              />
            </div>
            <div class="d-flex">
              <p class="today-card__time"> {{ !index?  "Now": $moment(data.dt * 1000).format("hA")}}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  // data() {
  //   return {
  //     forecast: {},
  //   };
  // },
  methods: {
    getImageSrc(icon) {
      if (icon == "01d" || icon == "01n" || icon == "02d" || icon == "02n") {
        return "/Suncloud.png";
      }
      else if (icon == "03d" || icon == "03n" || icon == "04d" || icon == "04n") {
        return "/TodaySunCloud.png";
      }
      else if (icon == "09d" || icon == "09n" || icon == "10d" || icon == "10n") {
        return "/RainDrops.png";
      }
      else if (icon == "11d" || icon == "11n") {
        return "/ThunderLightening.png";
      }
      else {
        return "/SunCloudRain.png";
      }
    }
  },
  computed: {
    forecastData() {
      return this.$store.getters.getForecastData;
    },
    todayHourlyData() {
      return this.$store.getters.getTodayHourlyData;
    }
  },
};
</script>

<style lang="scss" scoped>
.today-card {
  background: #0044AB;
  max-width: 940px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__title {
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-left: 15px;
    margin-bottom: 25px;
  }
  &__date {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    color: #ffffff;
    margin-right: 5px;
  }
  &__degrees {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__time {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    // margin-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__graphic {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
  }
}
.d-flex {
  justify-content: space-between;
  align-items: center;
}
</style>
＀
