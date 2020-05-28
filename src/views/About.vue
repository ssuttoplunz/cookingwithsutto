<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <h1 style="padding-right:8px;">Hello, I'm</h1>
        <v-img alt="Sutto"
                class="shrink"
                contain
                :src="require('@/assets/sutto_black.png')"
                width="75"/>
        <h1>!</h1>
      </v-row>
      <v-row justify="space-around">
        <v-col xs="10" sm="8" md="7" lg="6" xl="6">
          <v-row>I love cooking, and wanted to create a place to showcase my cooking adventures, as well as my creative side programming the website myself.
        I am very excited to start this adventure, and am glad for all who follow!
          </v-row>
          <br/>
          <v-row>
            <v-col cols="6">
              <v-img alt="Image of Sutto holding clothes hangers of fresh pasta"
                :src="require('@/assets/me-with-cows.jpg')"/>
            </v-col>
            <v-col cols="6">
              <v-img alt="Image of Sutto holding clothes hangers of fresh pasta"
                 :src="require('@/assets/me-with-pasta.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-img alt="Image of Sutto holding clothes hangers of fresh pasta"
                :src="require('@/assets/me-with-family.jpg')"/>
            </v-col>
            <v-col cols="6">
              <v-img alt="Image of Sutto holding clothes hangers of fresh pasta"
                 :src="require('@/assets/me-with-b.jpg')"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
