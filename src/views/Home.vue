<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item.title"
        xs="12" sm="6" md="4" lg="4" xl="3">
          <v-card :to="`/recipe/${item.id}`">
            <v-img
              :src="require(`@/assets/${item.hardsrc}`)"
              :lazy-src="require(`@/assets/${item.hardsrc}`)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="500px">
              <v-card-title v-text="item.title"></v-card-title>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import items from '@/assets/data.json'

export default {
  name: 'Home',
  data: () => ({
    items: []
  }),
  mounted () {
    this.items = items
  }
}
</script>
