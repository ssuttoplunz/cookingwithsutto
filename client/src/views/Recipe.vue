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
              {{ decimalToFraction(ingredient.amount) }} {{ ingredient.unit }} {{ ingredient.name }}
            </div>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col v-if="item && item.steps">
        <recipe-step
          v-for="(step, index) in item.steps"
          :key="index"
          :imageUrl="step.image_url"
          :title="step.title"
          :text="step.text"
          :imagePosition="step.image_position">
        </recipe-step>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useAppStore } from '@/store/app'
import RecipeStep from '@/components/RecipeStep.vue'

const decimalToFraction = (decimalString: string): string => {
  if (!decimalString) return ''

  const decimal = parseFloat(decimalString)

  // Edge case for zero
  if (decimal === 0) return '0'

  // Find the whole part
  const wholePart = Math.floor(decimal)

  // Get the fractional part
  let fraction = decimal - wholePart
  
  // If no fractional part, return the whole part
  if (fraction === 0) {
    return `${wholePart}`
  }

  // Scale the fractional part to an integer (avoid floating-point precision issues)
  let denominator = 10000 // Use a high denominator to scale the fraction
  let numerator = Math.round(fraction * denominator)

  // Simplify the fraction
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
  };

  const divisor = gcd(numerator, denominator)
  numerator /= divisor
  denominator /= divisor

  // If the fraction is greater than or equal to 1, convert it to a mixed fraction
  if (numerator >= denominator) {
    const wholeFraction = Math.floor(numerator / denominator)
    numerator = numerator % denominator
    return `${wholePart + wholeFraction} ${numerator}/${denominator}`
  }

  // Otherwise, return the whole part with the fraction
  return `${wholePart > 0 ? wholePart : ''} ${numerator}/${denominator}`
}

const props = defineProps({
  id: String
})
interface Step {
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
  steps: Step[]
}

const appStore = useAppStore()

onMounted(() => {
  if (props.id) {
    appStore.fetchRecipeById(props.id)
  }
})

const item = computed(() => appStore.getRecipe(props.id))

</script>
