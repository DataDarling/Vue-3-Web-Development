import { defineStore } from 'pinia';

export const useWebInfoStore = defineStore('webInfo', {
  state: () => ({
    title: 'Assignment 3 My Portfolio App',
    footerText: 'This is the footer of my Vue app',
  }),
  persist: true, // Enable persistence
});
