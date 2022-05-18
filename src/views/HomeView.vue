<template>
  <div>
    <component-nav></component-nav>
    <quien-somos></quien-somos>
    <ayuda-soporte></ayuda-soporte>
    <promocion-app></promocion-app>
  </div>
</template>

<script>
  import ComponentNav from '../components/NavCarrusel'
  import QuienSomos from '../components/QuienSomos'
  import AyudaSoporte from '../components/AyudaSoporte'
  import PromocionApp from '../components/PromocionApp'
  export default {
    name: 'HomeView',
    components: {
      ComponentNav,
      QuienSomos,
      AyudaSoporte,
      PromocionApp
    },
  }
</script>
