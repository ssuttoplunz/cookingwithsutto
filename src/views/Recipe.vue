<template>
  <v-container fluid>
    <v-row flat v-if="item && item.title" justify="center" class="pa-3">
      <h1>{{item.title}}</h1>
    </v-row>
    <v-row>
      <v-col v-if="item && item.ingredients" cols="12" sm="5" md="4" lg="3" xl="3">
        <v-list>
          <v-list-item
            v-for="(ingredient, index) in item.ingredients"
            :key="index"
          >
            <div :style="{ display: 'flex', gap: '24px' }">
              <h4>{{index + 1}}.</h4>
              {{ingredient}}
            </div>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col v-if="item && item.blurbs">
        <recipe-blurb
          v-for="(blurb, index) in item.blurbs"
          :key="index"
          :imageUrl="blurb.imageUrl"
          :title="blurb.title"
          :text="blurb.text"
          :imagePosition="blurb.imagePosition">
        </recipe-blurb>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import itemsData from '@/assets/data.json'
import RecipeBlurb from '@/components/RecipeBlurb.vue'

const props = defineProps({
  id: String
})
interface Blurb {
  imageUrl?: string
  imagePosition?: string
  text: string
  title?: string
}
interface Item {
  id: string
  title: string
  date: string
  hardsrc: string
  ingredients?: string[]
  blurbs: Blurb[]
}

const item: Item = reactive(itemsData.filter(item => item.id === props.id)[0])

</script>
