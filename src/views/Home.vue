<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item.title"
        cols="12"
        xs="12" sm="6" md="4" lg="4" xl="3"
      >
          <v-card :to="`/recipe/${item.id}`">
            <v-img
              :key="item.hardsrc"
              :src="getImageUrl(item.hardsrc)"
              :lazy-src="getImageUrl(item.hardsrc)"
              class="text-white align-end"
              cover
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="500px">
              <v-card-title>{{item.title}}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import itemsData from '@/assets/data.json'

const items = reactive(itemsData)

const getImageUrl = (url: string) => (
  new URL(`/src/assets/${url}`, import.meta.url).href
)

</script>
