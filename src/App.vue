<script setup>
// Este es el componente principal que actúa como un contenedor
// para todas las vistas (páginas) de tu aplicación.
</script>

<template>
  <router-view />
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
