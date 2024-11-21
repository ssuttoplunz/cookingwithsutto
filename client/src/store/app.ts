// Utilities
import { defineStore } from 'pinia'

interface Step {
  recipe_id: string
  text: string
  image_url?: string
  title?: string
  image_position?: string
}

interface Ingredient {
  recipe_id: string
  amount: string
  unit: string
  name: string
}

interface Recipe {
  id: string
  title: string
  date: string
  image_url: string
  steps?: Step[]
  ingredients?: Ingredient[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    recipes: [] as Recipe[],
  }),
  getters: {
    getRecipe(state) {
      return (id?: string) => state.recipes.find((item) => item.id === id)
    }
  },
  actions: {
    async fetchRecipes() {
      // NOTE: only fetching if the store isn't already populated, or if refreshed on recipe page and has 1 recipe
      if (this.recipes.length <= 1) {
        try {

          const response = await fetch('/api/recipes')
          const data = await response.json()
          this.recipes = data
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }
    },
    async fetchRecipeById(id: string) {
      const index = this.recipes.findIndex(todo => todo.id === id)
      if (index !== -1 && !this.recipes[index].hasOwnProperty('steps')) {
        try {
          const response = await fetch(`/api/recipes/${id}`)
          const data = await response.json()
          this.recipes[index] = {
            ...data.recipe[0],
            steps: data.steps,
            ingredients: data.ingredients,
          }
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }
      // NOTE: this is for the instance where you refersh the page with a recipe open
      if (index === -1 && id) {
        try {
          const response = await fetch(`/api/recipes/${id}`)
          const data = await response.json()
          this.recipes.push({
            ...data.recipe[0],
            steps: data.steps,
            ingredients: data.ingredients,
          })
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }
    }
  }
})
