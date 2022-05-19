<template lang="">
    <v-container>
        <v-row>
            <v-col md="6" sm="12">
                <inicio-sesion-uno></inicio-sesion-uno>
            </v-col>
            <v-col md="6">
                <crear-admin></crear-admin>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import InicioSesionUno from '../components/InicioSesionUno'
import CrearAdmin from '../components/CrearAdmin.vue'
export default {
    name: 'InicioSesion',
    components:{
        InicioSesionUno,
        CrearAdmin
    },
    data() {
        return {
            crearUsuario:{

            },
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
}
</script>
<style lang="">
    
</style>