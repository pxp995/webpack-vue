<template>
  <div id="app">
    <div>{{msg}}</div>
    <img src="./assets/img/logo.png">
    <com1></com1>
  </div>
</template>

<script>
import com1 from './components/com1'
export default {
  el: '#app',
  components: { com1 },
  data() {
    return {
      msg: "hello vue from webpack"
    }
  }
}
</script>

<style>

</style>
