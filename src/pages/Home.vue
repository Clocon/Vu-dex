<template>
  <div class="row">
    <form id="searchForm" class="form-inline col-md-8 offset-md-2">
      <div class="form-group mb-2 mr-2">
        <input type="text" class="form-control" id="name" placeholder='Introduce el id o nombre del pokemon'>
      </div>
      <button type="submit" class="btn btn-secondary mb-2">Buscar</button>
    </form>
  </div>
  <div class="col-md-12">
    <div class="row card-container">
    </div>
  </div>
  <div class="card-item col-md-3 text-center card-box" :data-id="pokeObj.pokeId">
    <a class="remove-btn" href="#">X</a><img class="photo" :src="pokeObj.pokeImage" :alt="pokeObj.pokeName" />
    <h2 class="name mb-2"> {{pokeObj.pokeName}}</h2>
    <ul v-for="item in pokeObj.pokeType" class="type-list">
      <li class="type-item"> {{item.type.name}}&nbsp;</li>
    </ul>
  </div>

</template>

<script>
import BuscarPokemon from '@/components/BuscarPokemon.vue'
export default {
  name: 'HomePage',
  data() {
    return {
      pokeList: [],
      pokeObj: {
        pokeSearch: 'charizard',
        pokeName: '',
        pokeType: '',
        pokeImage: '',
        pokeId: ''
      }
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
    this.loadPokemonData(this.pokeObj.pokeSearch)
  }
}
</script>