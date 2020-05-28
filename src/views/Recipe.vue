<template>
  <div>
    <v-container fluid>
      <v-row flat v-if="item && item.title" justify="center">
        <h1>{{item.title}}</h1>
      </v-row>
      <v-row>
        <v-col v-if="item && item.ingredients" cols="12" sm="5" md="4" lg="3" xl="3">
          <v-list>
            <v-list-item v-for="(ingredient, index) in item.ingredients" :key="index">
              <v-list-item-icon><h4>{{index + 1}}.</h4></v-list-item-icon>
              <v-list-item-content>{{ingredient}}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col v-if="item && item.blurbs">
          <recipe-blurb v-for="(blurb, index) in item.blurbs" :key="index"
            :imageUrl="blurb.imageUrl"
            :title="blurb.title"
            :text="blurb.text"
            :imagePosition="blurb.imagePosition">
          </recipe-blurb>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import items from '@/assets/data.json'
import RecipeBlurb from '@/components/RecipeBlurb.vue'

export default {
  name: 'Recipe',
  components: {
    RecipeBlurb
  },
  props: {
    id: {
      type: String
    }
  },
  data: () => {
    return {
      item: undefined
    }
  },
  mounted () {
    this.item = items.filter(item => item.id === this.id)[0]
  }
}
</script>

<style scoped>
</style>
