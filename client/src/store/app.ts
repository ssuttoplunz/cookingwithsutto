// Utilities
import { defineStore } from 'pinia'

interface Blurb {
  imageUrl?: string
  imagePosition?: string
  text: string
  title?: string
}

interface Recipe {
  id: string
  title: string
  date: string
  hardsrc: string
  ingredients?: string[]
  blurbs: Blurb[]
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
      try {
        const response = await fetch('/api/recipes')
        const data = await response.json()
        this.recipes = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
})
