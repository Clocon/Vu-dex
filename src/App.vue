<template>
  <header class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="title my-4">Pokédex</h1>
      </div>
    </div>
  </header>

  <router-view />


  <footer class="text-center">
    Vuédex Patrocinada por el Profesor Oakey &copy;2022
  </footer>
</template>

<script>
export default {
  name: "App",

}
</script>