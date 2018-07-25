<template>
  <div class="hello">
    <hello></hello>
    <!-- <box-tool></box-tool> -->

  <image-tool :myCroppa="myCroppa"></image-tool>

    <h1>myDSTI</h1>
    <h2>this is testing the MEVN stack</h2>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Box from '../shared/box'
import Croppa from '../shared/vue-croppa'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    'image-tool': Croppa,
    'box-tool' : Box
  }
 }

</script>
