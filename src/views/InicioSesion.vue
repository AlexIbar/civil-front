<template lang="">
    <v-container>
        <v-row>
            <v-col md="6" sm="12">
                <inicio-sesion-uno></inicio-sesion-uno>
            </v-col>
            <v-col md="6">
                <inicio-sesion-uno></inicio-sesion-uno>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import InicioSesionUno from '../components/InicioSesionUno'
export default {
    name: 'InicioSesion',
    components:{
        InicioSesionUno
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