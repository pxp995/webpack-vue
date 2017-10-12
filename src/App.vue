<template>
  <div id="app">
    <div>{{msg}}</div>
    <img src="./assets/img/logo.png">
    <button @click="clickMe">clickMe!</button>
    <com1></com1>
  </div>
</template>

<script>
import com1 from './components/com1';
export default {
  components: { com1 },
  data () {
    return {
      msg: 'hello vue from webpack'
    };
  },
  methods: {
    clickMe () {
      console.log('你点击了按钮!!');
    }
  }
};
</script>

<style>

</style>
