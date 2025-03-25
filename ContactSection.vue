<template>
    <section>
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name</label>
          <input id="name" v-model="formData.name" type="text" />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" v-model="formData.email" type="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const formData = ref({
    name: '',
    email: '',
    message: ''
  })
  
  // Watch for changes in formData
  watch(formData, (newVal, oldVal) => {
    console.log('Form data changed:', newVal)
  })
  
  function submitForm() {
    console.log('Form submitted:', formData.value)
    // reset the form after submission
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  }
  </script>
  