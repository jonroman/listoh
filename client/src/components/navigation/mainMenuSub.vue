<template>
<div id="main-menu-sub" class="row" v-show="mainmenusub" name="fade">
        <div class="col-sm-12 border" style="background-color:rgb(252, 252, 252);">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/posts/new">Add Posts <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/posts">View Posts</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
   name: 'MainMenuSub',
   data () {
       return {
           mainmenusub: false
       }
   },
   beforeCreated () {
       console.log("************ beforeCreated life cycle ************")
   },
   created () {
       this.mainmenusub = this.$route.meta.displayMainMenuSub
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    #main-menu-sub {
        background-color: white;
    }

</style>
