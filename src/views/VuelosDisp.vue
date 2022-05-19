<template>
    <div>
        <v-container>
            <v-row  class="justify-center">
                <v-col sm="6">
                    <v-card>
                         <v-form class="mx-4">
       <v-text-field
      v-model="datosEnvio.origen"
      :counter="10"
      label="Origen"
      required
    ></v-text-field>

       <v-text-field
      v-model="datosEnvio.destino"
      :counter="10"
      label="Destino"
      required
    ></v-text-field>

     <v-row class="justify-center my-3">
         <v-time-picker
      v-model="datosEnvio.hora_salida"
      elevation="15"
    ></v-time-picker>
     </v-row>

      <v-text-field
      v-model="datosEnvio.precio"
      :counter="10"
      label="Precio"
      type="number"
      required
    ></v-text-field>

    <v-text-field
      v-model="datosEnvio.fecha"
      :counter="10"
      label="Fecha"
      type="date"
      required
    ></v-text-field>


    <v-row class="justify-center">
        <v-btn
      color="warning"
      @click="envioInformacion"
    >
     Guardar
    </v-btn>
    </v-row>
    <br>
  </v-form>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-container>
    <v-container>
        <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Origen
          </th>
          <th class="text-left">
            Destino
          </th>
          <th class="text-left">
            Hora salida
          </th>
          <th class="text-left">
            Fecha
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in datos"
          :key="item.id_vuelo"
        >
          <td>{{ item.id_vuelo }}</td>
          <td>{{ item.origen }}</td>
          <td>{{ item.destino }}</td>
          <td>{{ item.hora_salida }}</td>
          <td>{{ new Date(item.fecha).toLocaleString().split(',')[0] }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-container>
    </div>
</template>
<script>
export default {
    name:'VuelosDisp',
    data() {
        return {
            datosEnvio:{
                origen:'',
                destino:'',
                hora_salida:'',
                precio:null,
                fecha:''
            },
            datos:null
        }
    },
    methods: {
        envioInformacion(){
            let usuario = this.datosEnvio
            fetch('http://localhost:3001/CrearVuelos', {
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
                this.datosEnvio={
                origen:'',
                destino:'',
                hora_salida:'',
                precio:null,
                fecha:''
            }
            fetch('http://localhost:3001/ConsultarVuelos').then(res=> res.json()).then(res=> this.datos=res.vuelos)
        }
    },
    created() {
        fetch('http://localhost:3001/ConsultarVuelos').then(res=> res.json()).then(res=> this.datos=res.vuelos)
    },
}
</script>
<style lang="">
    
</style>