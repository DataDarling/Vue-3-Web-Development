<template>
    <section>
      <h2>My Projects</h2>
      <!-- v-if to show a message if there are no projects -->
      <p v-if="projects.length === 0">No projects available</p>
  
      <!-- v-for to display each project -->
      <ul v-else>
        <li v-for="(project, index) in projects" :key="index">
          {{ project }}
        </li>
      </ul>
  
      <!-- Show the total number of projects using a computed property -->
      <p>Total Projects: {{ totalProjects }}</p>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const projects = ref([
    'Project One',
    'Project Two'
  ])
  
  const totalProjects = computed(() => projects.value.length)
  </script>
  