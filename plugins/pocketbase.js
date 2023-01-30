import { defineNuxtPlugin } from '#app'
import PocketBase from 'pocketbase'

const pb = new PocketBase('https://pocketbase-playground.fly.dev')

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      pb,
    },
  }
})
