<template>
    <div>
        <div 
    <croppa v-model="myCroppa"
        :width="150"
         :height="150"
         placeholder="Hi Jon"
         placeholder-color="#000"
         :placeholder-font-size="16"
         canvas-color="transparent"
         :show-remove-button="true"
         remove-button-color="black"
         :show-loading="true"
         :loading-size="50"
    ></croppa>
    <button @click="uploadCroppedImage">Click Me!</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Croppa from 'vue-croppa'
    import 'vue-croppa/dist/vue-croppa.css'
    Vue.use(Croppa);
    var vm = new Vue({
        data: function() {
            return {
            myCroppa: {}
            }
        },
        methods: {
            uploadCroppedImage() {
            this.myCroppa.generateBlob((blob) => {
                // write code to upload the cropped image file (a file is a blob)
            }, 'image/jpeg', 0.8) // 80% compressed jpeg file
            }
        }
    })

    vm.myCroppa = null;

 </script>

 <style scoped>
.croppa-container {
   background-color: lightblue;
   border: 2px solid grey;
   border-radius: 8px;
 }
 .croppa-container:hover {
   opacity: 1;
   background-color: #8ac9ef;
 }
 .croppa-container {
  margin-right: 10px;
  margin-bottom: 10px;
 }
</style>