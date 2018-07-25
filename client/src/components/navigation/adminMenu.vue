<template>
    <div class="col-2 collapse d-md-flex bg-faded pt-2 h-100" id="sidebar" v-if="showAdminMenu" name="fade">
        <ul class="nav flex-column">
            <li class="nav-item"><a class="nav-link" href="/">myDSTI</a></li>
            <li class="nav-item"><a class="nav-link" href="/posts">Posts</a></li>
        </ul>
    </div>
</template>

<script>
export default {
   name: 'AdminMenu',
   data () {
       return {
           showAdminMenu: false
       }
   },
   beforeCreated () {
   },
   created () {
       console.log('showAdminMenu', this.$route.meta.displayAdminMenu)
       this.showAdminMenu = this.$route.meta.displayAdminMenu
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>
