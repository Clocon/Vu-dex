<template>
  <div>
    <div class="card-item col-md-3 text-center" data-id="' + pokemonData.internalId + '">
      <div class="card-box"><a class="remove-btn" href="#">X</a><img class="photo" width="150px"
          src="' + pokemonImage + '" alt="' + pokemonName + '" />
        <h2 class="name mb-2">' + pokeName + '</h2>
        <ul class="type-list">' + pokeType + '</ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  data() {
    return {
      pokeName: 'pikachu',
      pokeType: ''
    }
  },
  props: {
    pokeValue: {
      type: String,
      default: null
    }
  },
  options: {
    type: Object,
    required: true
  },
  methods: {
    async loadPokemonData(pokeName) {
      console.info('-- Cargamos un Pokemon --')
      try {
        const requestPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        const pokeData = await requestPokemon.json()
        console.log(pokeData)
      } catch (error) {
        console.info("No hemos podido encontrar a tu pokemon, pasa un nombre válido, por favor.", error)
      }
    }
  },
  mounted() {
    this.loadPokemonData(this.pokeName)
  }
}
</script>