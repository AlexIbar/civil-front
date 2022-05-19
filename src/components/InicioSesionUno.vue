<template lang="">
    <v-card>
                    <v-card-title class="text-center justify-center">
                        Iniciar sesión
                    </v-card-title>
                    <div class="mx-7">
                        <v-text-field
            v-model="usuarioCreado.cedula"
            :rules="nameRules"
            counter="10"
            hint="Campo requerido"
            label="Cedula"
          ></v-text-field>
          <v-text-field
            v-model="usuarioCreado.contrasena"
            counter="10"
            type="password"
            hint="Campo requerido"
            label="Contraseña"
          ></v-text-field>
                    </div>
                    <div class="d-flex justify-center my-4">
                        <v-btn color="blue darken-3" class="ma-2 white--text" @click="buscarUsuario">Iniciar
                            <v-icon right dark>
                            mdi-send
                        </v-icon>
                        </v-btn>
                    </div>
                </v-card>
</template>
<script>
export default {
    name:'InicioSesionUno',
    data() {
        return {
            usuarioCreado:{
                cedula: '',
                contrasena:''
            },
            nameRules: [
                v => !!v || 'Campo requerido',
                v => v.length <= 10 || 'La cedula no puede superar los 10 caracteres',
                v => /[0-9]{7,10}/.test(v) || 'Cedula invalida',
            ]
        }
    },
    methods: {
        buscarUsuario(){
            let usuario = this.usuarioCreado
            fetch('http://localhost:3001/verificarUsuario', {
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
    },
                method: 'POST',
                body: JSON.stringify(usuario)
            })
            .then(respuesta => respuesta.json())
            .then(() => location.href='#/vuelosDisp')
        }
    },
}
</script>
<style lang="">
    
</style>