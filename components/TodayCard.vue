<template>
  <!-- only have to do a 3 hr forecast so stop after 3 hourly / forecast section here in doc-->
  <section class="today">
    <v-card class="today-card" elevation="0">
      <v-container style="background-color:#104084 ;">
        <v-row no-gutters>
          <v-col cols="6">
            <h2 class="today-card__title" style="padding-left: 20px;">Today</h2>
          </v-col>
          <v-col cols="6">
            <p class="today-card__date" style="padding-right: 60px;">Mar, 9</p>
          </v-col>
          <v-container class="lighten-5">
            <v-row no-gutters>
              <v-card class="mx-2" v-for="weather in weathers" :key="weather" cols="1" style="border-radius: 20px !important; border: 1px solid #5096FF; width: 70px;" tile>
                <h6 style="font-size: 18px; line-height: 20px ;" class="text-center pt-3"> {{ weather.temp }} &deg;C </h6>
                <figure>
                  <img  height="43px" width="100%" src="/TodaySunCloud.png" class="today-card__graphic" alt="" />
                </figure>
                <h6 style="font-size: 18px; line-height: 20px ;" class="text-center pb-3"> {{  weather.time }} </h6>
              </v-card>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>

export default {
  data() {
    return {
      weathers: [
        {
          temp: 29,
          time: 'Now',
        },
        {
          temp: 26,
          time: '12 PM',
        },
        {
          temp: 24,
          time: '1 PM',
        }, 
        {
          temp: 26,
          time: '2 PM',
        },
        {
          temp: 20,
          time: '3 PM',
        },
        {
          temp: 26,
          time: '4 PM',
        },
        {
          temp: 20,
          time: '5 PM',
        },
        {
          temp: 26,
          time: '6 PM',
        },
        {
          temp: 26,
          time: '7 PM',
        },
        {
          temp: 26,
          time: '8 PM',
        },
      ],
      country_detail : ''
    };
  },
  methods: {
    getTodayforcast() {
      this.country_detail = this.$store.state.show_detail ;
      console.log(this.country_detail.coord.lat)
      fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.country_detail.coord.lat + "&lon=" + this.country_detail.coord.lon + "&appid=b8f5d5a3c8c40a270978a5686d277fbd", { method: "GET" })
        .then((response) => {
          response.json().then((data) => {
            console.log(data)
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  watch: {
    "$store.state.show_detail": "getTodayforcast"
  },
};
</script>

<style lang="scss" scoped>
.today-card {
  background: rgb(0, 68, 171);
  max-width: 940px;
  border-radius: 20px;
  margin-left: 30.5px;

  &__title {
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }

  &__date {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    color: #ffffff;
  }

  &__degrees {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }

  &__time {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
  }

  &__graphic {
    height: 100px;
    width: 70px;
    display: flex;
    justify-content: center;
  }
}

.d-flex {
  justify-content: space-between;
}
</style>