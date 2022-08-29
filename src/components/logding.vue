<template>
 <div class="worp">
    <div></div>
 </div>
</template>

<script>
export default {
 name: '',
 components:{},
 data() {
   return {

   }
 },
 created() {
 },
 mounted() {
 },
 methods: {

 }
}

</script>

<style scoped>
    .worp{
        position:fixed;
        left: 0;
        top: 0;
        width:100%;
        height: 100vh;
        background-color:  rgba(0, 0, 0, 0.5);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .worp>div{
        width: 50px;
        height: 50px;
        border:6px solid;
        border-radius:50%;
        border-top-color: white;
        border-color:white transparent white transparent;
        animation: identifier 1s linear infinite;
        
    }
    @keyframes identifier {
        from { 
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>