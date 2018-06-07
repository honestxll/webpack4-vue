<template>
  <div class="app">
    <ul>
      <li v-for="m in msg">{{ m }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: [ 'hola~', 'hello!', '你好：）' ]
    }
  }
}
</script>

<style lang="scss">
.app {
  color: red;
  font-size: 80px;
  padding: 80px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(#21d5df, 0.31);
  background: -webkit-linear-gradient(right,#fefefe,#cff1c6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0,0,0,0);
}
</style>
