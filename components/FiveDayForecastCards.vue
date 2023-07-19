<template>
  <section class="forecast d-flex" elevation="0">
    <v-card class="forecast-card" elevation="0">
      <v-container style="background-color: #104084;">
        <v-row no-gutters>
          <v-col cols="6">
            <h2 class="forecast-card__title">5-Day Forecast</h2>
          </v-col>
          <v-col v-for="day in days" :key="day" cols="12">
            <div class="d-flex">
              <p class="forecast-card__day">{{ day.day }}</p>
              <img :src="'./' + day.image" alt="" />
              <div class="d-flex" style="padding-top: 10px;">
                <p class="forecast-card__range">{{ day.high_temp }} &deg;c</p>
                <p class="forecast-card__range low-temp">{{ day.low_temp }} &deg;c</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="forecast-card" elevation="0">
      <v-container style="background-color: #104084;">
        <v-row no-gutters>
          <v-col cols="6">
            <h2 class="forecast-card__title">5-Day Forecast</h2>
          </v-col>
          <v-col v-for="day in days" :key="day" cols="12">
            <div class="d-flex">
              <p class="forecast-card__day">{{ day.day }}</p>
              <img :src="'./' + day.image" alt="" />
              <div class="d-flex" style="padding-top: 10px;">
                <p class="forecast-card__range">{{ day.high_temp }} &deg;c</p>
                <p class="forecast-card__range low-temp">{{ day.low_temp }} &deg;c</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      days: [
        {
          day: 'Monday',
          image: 'RainDrops.png',
          high_temp: 13,
          low_temp: 10
        },
        {
          day: 'Tuseday',
          image: 'ThunderLightening.png',
          high_temp: 17,
          low_temp: 12
        },
        {
          day: 'Wednesday',
          image: 'SunCloudRain.png',
          high_temp: 21,
          low_temp: 18
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.forecast-card {
  background: rgb(0, 68, 171) !important;
  width: 455px;
  border-radius: 20px;
  margin-top: 42px;
  margin-left: 31px;

  &__title {
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }

  &__day {
    font-family: Alegreya Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    padding-top: 10px;
  }

  &__range {
    font-family: Alegreya Sans;
    font-size: 10px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    margin-right: 13px;
  }
}
.d-flex {
  justify-content: space-between;
}
.low-temp {
  color: silver ;
}
</style>