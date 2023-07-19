<template>
  <v-app>
    <v-main>
        <Mainview />
      <Nuxt />
    </v-main>
  </v-app>
       
</template>

<script>
import Vue from 'vue'
import VTooltip from 'v-tooltip'
import Mainview from '../components/Mainview.vue'

export default {
  components: { Vue, Mainview},
  name: 'IndexPage'
}
</script>
<style>
  .theme--dark.v-application {
    background-color:  transparent !important;
  }
  .theme--dark.v-sheet {
    background-color:  transparent !important;
  }
  
  .theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
    background-color: transparent !important ;
  }
  
  .theme--dark.v-navigation-drawer  {
    /* background-color: transparent !important ; */
    background: radial-gradient(circle, rgba(80,150,255,1) 0%, rgba(0,68,171,1) 52%, rgba(1,68,168,1) 66%, rgba(16,64,132,1) 100%);
  }
  .v-application ul {
    padding: 0px;
  }
  
  .v-application .pa-2 {
    padding :4px 8px !important; 
  }
  .v-application .mb-2 {
    margin-bottom: 6px !important;
  }
@font-face {
    font-family: "SF Pro Display";
    src: local("SF Pro Display"),   
    url(../assets//font/SFPRODISPLAYREGULAR.OTF) format("opentype");
}

body {
  font-family: 'SF Pro Display' ;
}

</style>