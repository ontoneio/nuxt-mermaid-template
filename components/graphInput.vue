<template>
  <textarea
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)" 
    name="" 
    id="graphInput" 
    cols="30" 
    rows="10">
  </textarea>
</template>

<script>
export default {
  props: ['value']
  
}
</script>


<style scoped>

</style>