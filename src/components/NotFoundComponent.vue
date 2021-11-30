<template>
  <div class="container mt-5">
    <h1 class="text-primary">C'est une 404...</h1>
    <p>La page à laquelle vous essayez d'accéder semble indisponible ou a été supprimée. Nous vous conseillons de
      <router-link :to="{name: 'home'}">revenir à l'accueil.</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent"
}
</script>

<style scoped>

</style>