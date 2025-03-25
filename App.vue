<script setup>
import { ref } from 'vue';
import HomeSection from './components/HomeSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterComponent from './components/FooterComponent.vue'

// Reactive variable to store the message
const footerMessage = ref('')

// This function will be called whenever the child emits 'sendMessage'
function handleFooterMessage(msg) {
  footerMessage.value = msg
  // You could also log it or do anything else you want here
};

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
};
</script>

<template>
  <div>
    <nav>
      <button @click="scrollToSection('home')">Home</button>
      <button @click="scrollToSection('projects')">Projects</button>
      <button @click="scrollToSection('contact')">Contact</button>
    </nav>

    <div id="home">
      <HomeSection />
    </div>
    <div id="projects">
      <ProjectsSection />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
    <!-- <FooterComponent @sendMessage="handleFooterMessage" /> -->
    <!-- Display the message somewhere in the parent -->
    <!-- <p>{{ footerMessage }}</p>  -->

  </div>
</template>

<style>
/* Basic styling to separate sections visually */
#home, #projects, #contact {
  padding: 50px 0;
}
</style>
