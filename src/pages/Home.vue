<template>
  <div class="row">
    <form @submit.prevent="loadPokemonData" id="searchForm" class="form-inline col-md-8 offset-md-2">
      <div class="form-group mb-2 mr-2">
        <input type="text" class="form-control" id="name" v-model="pokeSearch"
          placeholder='Introduce el id o nombre del pokemon'>
      </div>
      <button type="submit" class="btn btn-secondary mb-2">Buscar</button>
    </form>
  </div>
  <lista-pokemon v-for="pokemon in pokeList" :key="pokemon.id" :pokemon="pokemon" @ereased="deletePokemon" />

</template>

<script>
import ListaPokemon from '@/components/ListaPokemon.vue'
export default {
  name: 'HomePage',
  data() {
    return {
      pokeSearch: 'charizard',
      pokeList: [],
      pokeObj: {
        pokeName: '',
        pokeType: '',
        pokeImage: '',
        pokeId: ''
      }
    }
  },
  components: {
    ListaPokemon
  },
  options: {
    type: Object,
    required: true
  },
  methods: {
    async loadPokemonData(pokeSearch) {
      console.info('-- Cargamos un Pokemon --')
      try {
        const requestPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
        const pokeData = await requestPokemon.json()
        this.pokeObj.pokeName = pokeData.name
        this.pokeObj.pokeImage = pokeData.sprites.front_default
        this.pokeObj.pokeId = pokeData.id
        this.pokeObj.pokeType = pokeData.types
        this.pokeList.push(this.pokeObj)
      } catch (error) {
        console.info("No hemos podido encontrar a tu pokemon, pasa un nombre válido, por favor.", error)
      }
    }
  },
  mounted() {
    this.loadPokemonData(this.pokeSearch)
  }
}
</script>