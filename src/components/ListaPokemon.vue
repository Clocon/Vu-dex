<template>
  <div v-if="pokemon" class="col-md-12">
    <div class="row card-container">
      <div class="card-item col-md-3 text-center card-box" :data-id="pokemon.pokeId">
        <a class="remove-btn" href="#" @click.prevent="borrarPokemon">X</a><img class="photo" :src="pokemon.pokeImage"
          :alt="pokemon.pokeName" />
        <h2 class="name mb-2"> {{pokemon.pokeName}}</h2>
        <ul v-for="item in pokemon.pokeType" class="type-list">
          <li class="type-item"> {{item.type.name}}&nbsp;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuscarPokemon',
  props: {
    searchValue: {
      type: Object,
      default: null
    }
  },
  methods: {
    borrarPokemon() {
      this.$emit("ereased", this.pokemon)
    }
  }
}
</script> 