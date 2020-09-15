<template>
  <div>
    <p>Double Counter is {{ doubleCounter }}</p>
    <p>The number of {{ accessClicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "AnotherResult",
  computed: {
    ...mapGetters([
      'doubleCounter',
      'accessClicks'
    ])
  }
}
</script>

<style scoped>

</style>
