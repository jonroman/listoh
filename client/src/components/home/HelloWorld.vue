<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-9">
      <div class="dsti-card">
          <h1>{{ msg }}</h1>
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ msg }}</p>
          <a href="/posts" class="btn btn-primary">Admin</a>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="dsti-card">
        <v-dept-menu></v-dept-menu>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-8">
      <div class="dsti-card">
          <h1>{{ msg }}</h1>
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ msg }}</p>
          <a href="/posts" class="btn btn-primary">Admin</a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="dsti-card">
        <v-slider></v-slider>
        <v-slider></v-slider>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DeptMenu from '../navigation/deptMenu'
import Slider from '../widget/slider'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'This is the title',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-slider': Slider,
    "v-dept-menu": DeptMenu
  }
 }
</script>

<style>
  .dsti-card {
    margin: .5em;
    padding: 1em;
    border: 3px;
    border-color: blue;
    border: 3px;
    background-color: white;
    border-radius: 5px;
  }
</style>