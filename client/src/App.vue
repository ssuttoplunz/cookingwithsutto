<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="px-2"
        :style="{ cursor: 'pointer' }"
        :src="potWhite"
        :max-width="100"
        @click="returnToHomePage"
      />
      <v-img
        class="d-none d-sm-flex"
        :style="{ cursor: 'pointer' }"
        :src="cookingWithSuttoWhite"
        :max-width="220"
        @click="returnToHomePage"
      />
      <v-spacer></v-spacer>
      <v-btn to="/about" class="mr-1 d-none d-sm-flex" color="white" dark>About me</v-btn>
      <v-btn
        icon="mdi-instagram"
        href="https://www.instagram.com/cookingwithsutto/"
        target="_blank"
        color="pink"
      />
      <v-btn
        icon="mdi-email-outline"
        small
        href="mailto:cookingwithsutto@gmail.com"
        target="_blank"
        color="blue"
      />
    </v-app-bar>
    <v-navigation-drawer :model-value="drawer" temporary right dark app>
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-title>
            <v-icon class="mr-1">mdi-home</v-icon> Home
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>
            <v-icon class="mr-2">mdi-account</v-icon> About me
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import potWhite from '@/assets/pot-white.png'
import cookingWithSuttoWhite from '@/assets/cooking-with-sutto-white.png'

const drawer = ref(false)

const router = useRouter()

const returnToHomePage = () => {
  router.push('/')
}

</script>
