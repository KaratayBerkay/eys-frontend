<template>
  <HeaderVue />
  <Carousel />
  <About />
  <Services />
  <Contacts />
  <v-bottom-navigation>
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>

      Recent
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-account</v-icon>

      Favorites
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>

      Nearby
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
import HeaderVue from '../components/EvyosWeb/Header.vue'
import Carousel from '../components/EvyosWeb/Carousel.vue'
import About from '../components/EvyosWeb/About.vue'
import Services from '../components/EvyosWeb/Services.vue'
import Contacts from './EvyosWeb/Contacts.vue'

</script>