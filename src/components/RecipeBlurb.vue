<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-if="imagePosition === 'right'">
          <h3 v-if="title">{{title}}</h3>
          <span>{{text}}</span>
        </v-col>
        <v-col cols="auto" v-if="imageUrl">
          <v-img :src="require(`@/assets/${imageUrl}`)"
                 :lazy-src="require(`@/assets/${imageUrl}`)"
                 :height="imageHeight" :width="imageWidth">
          </v-img>
        </v-col>
        <v-col v-if="imagePosition === 'left'">
          <h3 v-if="title">{{title}}</h3>
          <span>{{text}}</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'RecipeBlurb',
  props: {
    imageUrl: {
      type: String
    },
    imageHeight: {
      type: Number,
      default: 200
    },
    imageWidth: {
      type: Number,
      default: 200
    },
    imagePosition: {
      type: String,
      default: 'right'
    },
    text: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style>

</style>
