<template>
    <section>
      <!-- v-if to conditionally display a welcome message -->
      <h2 v-if="showWelcomeMessage">Welcome to my portfolio!</h2>
  
      <!-- A simple counter using ref() -->
      <div>
        <p>Counter: {{ counter }}</p>
        <button @click="incrementCounter">Increment</button>
      </div>
  
      <!-- Toggle extra info with v-show -->
      <button @click="toggleInfo">
        {{ showInfo ? 'Hide' : 'Show' }} Extra Info
      </button>
      <p v-show="showInfo">
        Here is some extra information about me:
           I am a data science major,
           I enjoy hiking,
           and I  enjoy reading.
      </p>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showWelcomeMessage = ref(true)
  const counter = ref(0)
  const showInfo = ref(false)
  
  function incrementCounter() {
    counter.value++
  }
  
  function toggleInfo() {
    showInfo.value = !showInfo.value
  }
  </script>
  