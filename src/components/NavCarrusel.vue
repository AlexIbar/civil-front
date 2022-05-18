<template>
    <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" reverse-transition="fade-transition"
            transition="fade-transition">
            <v-container class="contenedor-imagenes">
                <div v-if="i == 0">
                    <div class="uno">Nuestro centro es el cliente. Por eso Fly LG, busca enfocarse en un servicio al cliente de excelencia</div>
                    <v-btn :loading="loading3" :disabled="loading3" color="blue darken-3" class="ma-2 white--text"
                        @click="loader = 'loading3'" height="45px">
                        Consulta tu reserva
                        <v-icon right dark>
                            mdi-eye-arrow-right
                        </v-icon>
                    </v-btn>
                </div>
                <div v-if="i == 1">
                    <div class="dos">Reservar tu viaje ahora es más facil</div>
                    <v-btn :loading="loading3" :disabled="loading3" color="blue darken-3" class="ma-2 white--text"
                        @click="loader = 'loading3'" height="45px">
                        Reserva tu viaje
                        <v-icon  right dark>
                            mdi-airplane
                        </v-icon>
                    </v-btn>
                </div>
                <div v-if="i == 2">
                    <div class="uno">Tenemos un compromiso inquebrantable con nuestros clientes</div>
                </div>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: 'ComponenteNav',
    data() {
        return {
            items: [
                './imagenes/img1.jpg',
                './imagenes/img2.jpg',
                './imagenes/img3.jpg',
            ]
        }
    },
}
</script>
<style>
.contenedor-imagenes {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contenedor-imagenes>div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.uno,
.dos {
    font-size: 55px;
    font-weight: bold;
    color: white;
    text-align: center;
}

.dos {
    color: black;
}
</style>