// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title: 'SupaNuxt',
      meta:[
        {
          name:'description',
          content:'SupaNuxt is a user management application built with Nuxt.js, Supabase, NuxtUI, and Pinia'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
  srcDir:'src/',
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/ui'],
  supabase:{
    redirect:false
  },
  colorMode: {
    preference: 'dark'
  }
})