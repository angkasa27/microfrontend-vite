<template>
  <button @click="clickHandler" class="custom-button">
    Microfrontend Button (Vue)
  </button>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      alert("Hello from Vue Microfrontend!");
    }
  }
}
</script>

<style>
.custom-button {
  background-color: #42b883;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>