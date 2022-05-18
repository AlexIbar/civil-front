<template>
  <div>
    <component-nav></component-nav>
    <quien-somos></quien-somos>
    <ayuda-soporte></ayuda-soporte>
    <promocion-app></promocion-app>
    <footer-app class="mt-6"></footer-app>
  </div>
</template>

<script>
  import ComponentNav from '../components/NavBar'
  import QuienSomos from '../components/QuienSomos'
  import AyudaSoporte from '../components/AyudaSoporte'
  import PromocionApp from '../components/PromocionApp'
  import FooterApp from '../components/FooterApp.vue'
  export default {
    name: 'HomeView',
    components: {
      ComponentNav,
      QuienSomos,
      AyudaSoporte,
      PromocionApp,
      FooterApp
    },
  }
</script>
