<template>
  <div>
    <button class="btn btn-primary" @click="increment(1)">Async-Increment 1 (2secs)</button>
    <button class="btn btn-primary" @click="decrement(1)">Async-Decrement 1 (2secs)</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import namespace from '../store/type'

export default {
  name: "AsyncCounter",
  methods: {
    ...mapActions({
      increment: namespace.COUNTER_A_INCREMENT,
      decrement: namespace.COUNTER_A_DECREMENT
    })
  }
}
</script>

<style scoped>

</style>
