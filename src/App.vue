<template>
  <v-app>
     <!-- Potential colors for bar:
     blue lighten-1
     red darken-2
     black -->
    <v-app-bar
      app
      color="black"
      dark>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img class="mr-2"
                :src="require('./assets/pot_white.png')"
                transition="scale-transition"
                max-height="56"
                max-width="90"/>

          <v-img alt="Cooking with Sutto"
                class="hidden-xs-only"
                :src="require('./assets/cooking_with_sutto_white.png')"
                transition="scale-transition"
                max-height="56"
                max-width="220"/>
        </div>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn to="/about" class="mr-1 hidden-xs-only" color="black" dark>About me</v-btn>
      <v-btn icon
             href="https://www.instagram.com/cookingwithsutto/"
             target="_blank" color="black">
        <v-icon color="#F783AC">fab fa-instagram</v-icon>
      </v-btn>
      <v-btn icon small
             href="mailto:cookingwithsutto@gmail.com"
             target="_blank" color="black">
        <v-icon color="light-blue lighten-1">far fa-envelope</v-icon>
      </v-btn>
      <v-app-bar-nav-icon class="hidden-sm-and-up"  @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right dark app>
      <v-list nav dense>
        <v-list-item class="text-right d-block">
          <v-btn icon @click="drawer = false"><v-icon>fa fa-times</v-icon></v-btn>
        </v-list-item>
        <v-list-item to="/" >
          <v-list-item-title>
            <v-icon class="mr-1">fa fa-home</v-icon> Home
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" >
          <v-list-item-title>
            <v-icon class="mr-2">fa fa-user</v-icon> About me
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false
  })
})
</script>
