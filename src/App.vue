<template>
  <header class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="title my-4">Pokédex</h1>
      </div>
    </div>
    <div class="row">
      <form id="searchForm" class="form-inline col-md-8 offset-md-2">
        <div class="form-group mb-2 mr-2">
          <input type="text" class="form-control" id="name" placeholder='Introduce el id o nombre del pokemon'>
        </div>
        <button type="submit" class="btn btn-secondary mb-2">Buscar</button>
      </form>
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