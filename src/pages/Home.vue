<template>
  <div class="col-md-12">
    <div class="row card-container">
    </div>
  </div>
  <h1>AQUI VAN LOS POKEMONS</h1>
  <pokemon-card />
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
export default {
  name: 'HomePage',
  data() {
    return {
      pokeList: [],
    }
  },
  components: {
    PokemonCard
  }
}
</script>