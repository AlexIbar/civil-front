<template>
    <v-container class="mt-6">
        <v-row class="mx-4">
            <v-col md="7" >
                <v-img :src="imagen"></v-img>
            </v-col>
            <v-col md="5" >
                <h1 style="font-size:40px">BIENVENIDOS A Fly LG <span>TU MEJOR AEROLINEA.</span></h1>
                <p>Brindamos Servicios de Transporte Aéreo con los más altos niveles de Seguridad, Calidad y Confort a pasajeros y usuarios, permitiendo contribuir con la integración y desarrollo socio-económico del país.</p>
                <p>Nuestra Misión es convertirnos en la Aerolínea de preferencia en el mundo, siendo referencia en cuanto a Seguridad, Eficiencia y Excelencia en los servicios de transportación aérea; así como en el nivel de satisfacción alcanzado por nuestra distinguida clientela.</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:'QuienSomos',
    data() {
        return {
            imagen:'./imagenes/img5.jpg'
        }
    },
}
</script>
<style>
    
</style>