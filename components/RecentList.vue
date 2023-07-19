<template>
  <section class="recent" style="padding-bottom: 148px;" elevation="0">
    <ul class="no-bullets country-list">
      <li>
        <v-card class="recent-card pb-2">
          <v-container>
            <v-row no-gutters>
              <v-col style="border: 1px solid #5096FF ; border-radius: 20px ;" class="mb-2 pa-2" cols="12"
                v-for="country in cities" :key="country">
                <h1 class="recent-card__title" @click="getDetail(country)">{{ country.name }}</h1>
                <p class="recent-card__degree set_low"> {{ country.main.temp }} &deg;</p>
                <p class="recent-card__time">{{ country.main.time }}</p>

                <p class="recent-card__description">Mostly {{ country.weather[0].main }}</p>
                <p class="recent-card__range set_low" style="padding-top: 10px !important;">High: {{ Math.round(country.main.temp_max - 273) }} &deg;
                  Low: {{ Math.round(country.main.temp_min - 273) }} &deg;</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'RecentList',
  data() {
    return {
      states: [],
      cities: [
        {
          name:'Tarpon Springs',
          main:{
            time : '11:22 AM',
            temp : 30,
            temp_min : 300 ,
            temp_max : 320
          },
          weather: [
            {
              main :'Sunny'
            }
          ]
        },
        {
          name: 'Denver',
          main: {
            time : '9:22 AM',
            temp: 52,
            temp_min: 300,
            temp_max: 320
          },
          weather: [
            {
              main: 'Cloudy'
            }
          ]
        },
        {
          name: 'Tampa',
          main: {
            time : '11:22 AM',
            temp: 32,
            temp_min: 300,
            temp_max: 320
          },
          weather: [
            {
              main: 'Cloudy'
            }
          ]
        },
        {
          name: 'Jacksonville',
          main: {
            time : '11:22 AM',
            temp: 34,
            temp_min: 300,
            temp_max: 320
          },
          weather: [
            {
              main: 'Cloudy'
            }
          ]
        },
        {
          name: 'Denver',
          main: {
            time : '9:22 AM',
            temp: 52,
            temp_min: 300,
            temp_max: 320
          },
          weather: [
            {
              main: 'Cloudy'
            }
          ]
        },
        // {
        //   name: 'Tampa',
        //   main: {
        //     temp: 32,
        //     temp_min: 300,
        //     temp_max: 320
        //   },
        //   weather: [
        //     {
        //       main: 'Cloudy'
        //     }
        //   ]
        // },
      ], 
    }
  },
  methods: {
    async getWeather() {
      this.states = this.$store.state.states;
      this.states.forEach((value) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + value.lat + "&lon=" + value.lon + "&appid=b8f5d5a3c8c40a270978a5686d277fbd", { method: "GET" })
          .then((response) => {
            response.json().then((data) => {
              // console.log(data)
              this.cities.push(data)
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    getDetail(name){
      // here is country name is country detail
      this.$store.state.show_detail = name ;
    }
  },
  watch: {
    "$store.state.search_city": "getWeather",
  },

}
</script>

<style lang="scss" scoped>
.recent-card {
  max-width: 346px;
  border-radius: 20px;
  background: #2566a333;

  &__title {
    font-family: SF Pro Display;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 3px;

    width: 50%;
    display: inline-block;
    padding-top: 15px !important;
  }

  &__time {
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 8px;
  }

  &__description {
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    width: 50%;
    display: inline-block;
    float: left;
    padding-top: 15px !important;
  }

  &__degree {
    font-family: SF Pro Display;
    font-size: 50px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
  }

  &__range {
    font-family: SF Pro Display;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: right;
    color: #ffffff;
  }
}

.recent .no-bullets {
  list-style: none;
}

.country-list {
  width: 90%;
  display: inline-block;
}

.set_low {
  width: 50%;
  display: inline-block;
  float: right;
}
</style>
