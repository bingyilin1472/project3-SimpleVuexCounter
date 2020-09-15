<template>
  <div>
    <button class="btn btn-primary" @click="increment(1)">Increment 1 (realTime)</button>
    <button class="btn btn-primary" @click="decrement(1)">Decrement 1 (realTime)</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import namespace from '../store/type'
export default {
  name: "Counter",
  methods:{
    ...mapMutations({
      'increment': namespace.COUNTER_M_INCREMENT,
      'decrement': namespace.COUNTER_M_DECREMENT
    })
  }
}
</script>

<style scoped>

</style>
