<template>
  <p>Counter is {{ counter }}</p>
</template>

<script>
export default {
  name: "Result",
  computed:{
    counter () {
      return this.$store.getters.accessCounter
    }
  }
}
</script>

<style scoped>

</style>
