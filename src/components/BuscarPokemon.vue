<template>
  <select class="border-none" id="selector" :value="  Value" @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="item in options" :key="item.id" :value="item.id">{{item.label}}</option>
  </select>
</template>

<script>
export default {
  name: 'BuscarPokemon',
  props: {
    searchValue: {
      type: String,
      default: null
    }
  }
}
</script> 