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
  <div class="col-md-12">
    <div class="row card-container">
      <ListaPokemon v-for="pokemon in pokeList" :key="pokemon.id" :pokemon="pokemon" @ereased="deletePokemon" />
    </div>
  </div>
</template>

<script>
import ListaPokemon from '@/components/ListaPokemon.vue'
export default {
  name: 'HomePage',
  data() {
    return {
      continuamos: false,
      pokeSearch: '',
      pokeList: [],
      pokeOrderList: []
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
    async loadPokemonData() {
      console.info('-- Cargamos un Pokemon --')
      try {
        if (this.pokeList.find(e => e.pokeName === this.pokeSearch)) {
          console.info("Ese Pokemon ya lo tienes capturado!!")
          return
        }
        const requestPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeSearch}`)
        const pokeData = await requestPokemon.json()
        const pokeObj = {
          pokeName: pokeData.name,
          pokeImage: pokeData.sprites.front_default,
          pokeId: pokeData.id,
          pokeType: pokeData.types
        }
        this.pokeOrderList.push(pokeObj)
        this.pokeOrderList.sort(function (a, b) {
          const pokeA = new Date(a.pokeId)
          const pokeB = new Date(b.pokeId);
          if (pokeA < pokeB) return -1;
          if (pokeA > pokeB) return 1;
          return 0;
        })
        this.pokeList = this.pokeOrderList
        localStorage.setItem('Lista_Pokemons', JSON.stringify(this.pokeList))

      } catch (error) {
        console.info(error)
      }
    },
    deletePokemon(pokemon) {
      this.pokeList.splice(this.pokeList.indexOf(pokemon), 1)
      localStorage.setItem('Lista_Pokemons', JSON.stringify(this.pokeList))
    }
  },
  mounted() {
    const arrayStorage = JSON.parse(localStorage.getItem('Lista_Pokemons'))
    if (arrayStorage) {
      this.pokeOrderList = arrayStorage
      this.pokeList = this.pokeOrderList
    }
  }
}
</script>