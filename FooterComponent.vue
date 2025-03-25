<script setup>
import { defineProps, defineEmits } from 'vue';
import { NButton } from 'naive-ui';

const props = defineProps(['message']);
const emit = defineEmits(['updateMessage']);

const sendMessage = () => {
  emit('updateMessage', ' Hello From Footer component!');
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <NButton type="success" @click="sendMessage">Send Message to Parent</NButton>
  </div>
</template>

<style scoped>
div {
  margin-top: 20px;
}
</style>


