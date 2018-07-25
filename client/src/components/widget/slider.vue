<template>
    <div id="slider">
        <div v-bind:id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(user, index) in users" v-bind:data-target="'/user/'+user.name" data-slide-to="0" v-bind:class="{'active':(index === 0)}"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(user, index) in users" class="carousel-item" v-bind:class="{'active':(index === 0)}">
                <label>{{user.name}}</label>
               <img class="d-block w-100" v-bind:src="user.picSrc" v-bind:alt="user.name">
            </div>
        </div>
        <a class="carousel-control-prev" v-bind:href="'#'+carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" v-bind:href="'#'+carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
</template>

<script>
export default {
   name: 'slider',
   props: {
   },
   data () {
       return {
           carouselId: '',
           lastIndex: 0,
           users: [
               {name: 'jon Roman', picSrc: require('../../assets/DSTI_Logo_Small.jpg')},
               {name: 'SUpa Dupa', picSrc: require('../../assets/DSTI_Logo_XSmall.jpg')},
               {name: 'Billy Bob', picSrc: require('../../assets/DSTI_Logo_XSmall_(Grey).jpg')},
               {name: 'Billy Joel', picSrc: require('../../assets/DSTI_Logo_XSmall.jpg')},
               {name: 'Billy Idol', picSrc: require('../../assets/DSTI_Logo_Small.jpg')}
           ]
        }
   },
   beforeCreated () {
       this.carouselId = 'dsti-slider-' + Math.floor(Math.random() * 1000) + 1
   },
   created () {
       this.carouselId = 'dsti-slider-' + Math.floor(Math.random() * 1000) + 1
   },
   mounted () { },
   beforeDestroy () {},
   destroy () {}
}
</script>