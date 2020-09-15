<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 counter">
        <h1>Simple Vuex Counter</h1>
        <!-- 綁定props counter       -->
        <app-result></app-result>
        <another-result></another-result>
        <hr>
        <app-counter></app-counter>
        <hr>
        <async-counter></async-counter>
        <hr>
        <p>V-bind and @event way: {{ value }}</p>
        <input type="text" :value="value" @input="updateValue">
        <hr>
        <p>Computed getter and setter way: {{ value2 }}</p>
        <input type="text" v-model:value="value2">
        <hr>
        <p>Shared state/getter/mutation/action way: {{ value3 }}</p>
        <input type="text" v-model:value="value3">
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import Result from "@/components/Result";
import AnotherResult from "@/components/AnotherResult";
import AsyncCounter from "@/components/AsyncCounter";
import value from "./store/modules/value";
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    // 註冊元素，它會自動產生tag名稱，駝峰轉成形式:xx-xx
    appCounter: Counter,
    appResult: Result,
    anotherResult: AnotherResult,
    asyncCounter: AsyncCounter
  },
  computed:{
    value () {
      return this.$store.getters["value/getValue"]
    },
    value2: {
      get () {
        return this.$store.getters["value/getValue2"]
      },
      set (value) {
        return this.$store.dispatch('value/updateValue2', value)
      }
    },
    value3: {
      get () {
        return this.$store.getters.getValue
      },
      set (value) {
        return this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods:{
    updateValue (event) {
      this.$store.dispatch('value/updateValue', event.target.value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: left;
  margin-top: 60px;
}
</style>
