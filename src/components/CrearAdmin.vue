<template lang="">
    <v-card>
     <v-card-title class="text-center justify-center">
        Crear Usuario
    </v-card-title>
        <div class="mx-7">
          <v-text-field
            v-model="usuarioCreado.nombres"
            counter="10"
            hint="Campo requerido"
            label="Nombres"
          ></v-text-field>
          <v-text-field
            v-model="usuarioCreado.apellidos"
            counter="10"
            hint="Campo requerido"
            label="Apellidos"
          ></v-text-field>
          <v-text-field
            v-model="usuarioCreado.cc"
            counter="10"
            hint="Campo requerido"
            label="Cedula"
          ></v-text-field>
          <v-text-field
            v-model="usuarioCreado.email"
            counter="10"
            hint="Campo requerido"
            label="Correo"
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
                    <v-btn color="blue darken-3" class="ma-2 white--text" @click="crearUsuario">Crear
                            <v-icon right dark>
                            mdi-send
                        </v-icon>
                        </v-btn>
                    </div>
                </v-card>
</template>
<script>
export default {
    name: 'CrearAdmin',
    data() {
        return {
            usuarioCreado: {
                nombres: '',
                apellidos: '',
                cc: '',
                email: '',
                contrasena: ''
            },
            nameRules: [
                v => !!v || 'Campo requerido',
                v => v.length <= 10 || 'La cedula no puede superar los 10 caracteres',
                v => /[0-9]{7,10}/.test(v) || 'Cedula invalida',
            ]
        }
    },
    methods: {
        crearUsuario() {
            let usuario = this.usuarioCreado
            fetch('http://localhost:3001/CrearUsuario', {
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
    },
                method: 'POST',
                body: JSON.stringify(usuario)
            })
                .then((respuesta) => {
                    console.log(respuesta)
                })
                this.usuarioCreado={
                    nombres: '',
                    apellidos: '',
                    cc: '',
                    email: '',
                    contrasena: ''
                }
        }
    },
}
</script>
<style lang="">
    
</style>