<template lang="">
    <div>
        <div>
            <h1 class="text-center">NUESTRA PROMOCIÓN</h1>
            <p class="text-center">TENEMOS ALGUNAS PROMOCIONES PARA TI</p>
        </div>
        <v-container>
            <v-row class="justify-center">
                <v-col md="4" sm="6" v-for="img, key in imagenes" :key="key">
                    <v-card>
                        <v-img :src="img.imagen">
                            <v-card-subtitle class="text-center">{{img.destino}}</v-card-subtitle>
                        </v-img>
                        <v-card-title class="pb-0 text-center">
                            {{img.comentario}}
                        </v-card-title>
                        <v-card-title class="pb-0 text-center">
                            {{img.precio}}
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'PromocionApp',
    data() {
        return {
            imagenes:[
                {
                    imagen:'./imagenes/img9.jpg',
                    destino:'BOGOTA - CARTAGENA',
                    comentario:'Solo ida desde',
                    precio:'41 USD'
                },
                {
                    imagen:'./imagenes/img13.jpg',
                    destino:'CUCUTA - EJE CAFETERO',
                    comentario:'Solo ida desde',
                    precio:'48 USD'
                },
                {
                    imagen:'./imagenes/img14.jpg',
                    destino:'CALI - SANTA MARTA',
                    comentario:'Solo ida desde',
                    precio:'51 USD'
                }
            ]
        }
    },
}
</script>
<style lang="">
    
</style>