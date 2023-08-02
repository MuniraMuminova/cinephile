<template>
  <div class="wrapper">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
    components:{
        Navbar, 
        Footer
    }
}
</script>

<style>

</style>