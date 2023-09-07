<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-if="props.imagePosition === 'right'">
          <h3 v-if="props.title">{{props.title}}</h3>
          <span>{{props.text}}</span>
        </v-col>
        <v-col cols="auto" v-if="props.imageUrl">
          <v-img :src="getImageUrl(props.imageUrl)"
                 :lazy-src="getImageUrl(props.imageUrl)"
                 :height="imageHeight" :width="props.imageWidth">
          </v-img>
        </v-col>
        <v-col v-if="props.imagePosition === 'left'">
          <h3 v-if="props.title">{{title}}</h3>
          <span>{{props.text}}</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl?: string
  imageHeight?: number
  imageWidth?: number
  imagePosition?: string
  text: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageHeight: 200,
  imageWidth: 200,
  imagePosition: 'right'
})

const getImageUrl = (url: string) => (
  new URL(`/src/assets/${url}`, import.meta.url).href
)
</script>
