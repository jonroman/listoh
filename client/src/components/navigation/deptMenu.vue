<template>
    <div id="dept-menu">
        <div id="dept-nav">
            <img v-on:click="openMenu" src="../../assets/dept-button.png">
            <img src="../../assets/dept-button.png">
            <img src="../../assets/dept-button.png">
            <img src="../../assets/dept-button.png">
        </div>
        <div id="employee-options">Employee shit</div>
        <div id="qms-options">QMS Shit</div>
        <div id="hse-options">HSE Shit</div>
        <div id="company-options"> Company Shit</div>
    </div>
</template>

<script>
export default {
   name: 'DeptMenu',
   data () {
       return {

       }
   },
   methods: {
       openMenu: function(event) {
           console.log("now open the corresppnding div")
           console.log(event)
       }
   },
   beforeCreated () { },
   created () { },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style>
</style>
