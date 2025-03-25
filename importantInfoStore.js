import { defineStore } from 'pinia';

export const useImportantInfoStore = defineStore('importantInfo', {
  state: () => ({
    message1: 'Welcome to my Vue app!',
  }),
  persist: false, // Enable persistence
});
