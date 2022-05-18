<template lang="">
    <div style="position:relative">
        <br>
        <v-parallax height="400"  style="transform: skew(0, 3deg); margin-top:30px; filter: opacity(0.7) drop-shadow(0 0 0 black);" :src="imagen">
        </v-parallax>
        <br><br>
        <div class="d-flex flex-column align-center justify-center" style="position:absolute; top:0; left:0; right:0; bottom:0; margin:auto">
            <h1 style="font-size:50px; color:white">¿CÓMO PODEMOS AYUDARTE?</h1>
            <p>¿Necesitas atención personalizada?</p>
            <v-btn :loading="loading3" :disabled="loading3" color="blue darken-3" class="ma-2 white--text"
                        @click="loader = 'loading3'" height="45px">
                        Te ayudamos
                        <v-icon  right dark>
                            mdi-airplane
                        </v-icon>
                    </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AyudaSoporte',
    data() {
        return {
            imagen: './imagenes/img7.jpg'
        }
    },
}
</script>
<style lang="">
    
</style>