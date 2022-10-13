<template>
  <div v-if="pokemon" class="card-item col-md-2 text-center card-box" :data-id="pokemon.pokeId">
    <a class="remove-btn" href="#" @click.prevent="deletePokemon">X</a><img class="photo" :src="pokemon.pokeImage"
      :alt="pokemon.pokeName" />
    <h2 class="name mb-2"> {{pokemon.pokeName}}</h2>
    <ul v-for="item in pokemon.pokeType" class="type-list">
      <li class="type-item" :class="item.type.name"> {{item.type.name}}&nbsp;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BuscarPokemon',
  props: {
    searchValue: {
      type: Object,
      default: null
    },
    pokemon: {
      type: Object,
      default: null
    }
  },
  methods: {
    deletePokemon() {
      this.$emit("ereased", this.pokemon)
    }
  }
}
</script> 