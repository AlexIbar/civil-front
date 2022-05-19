<template lang="">
  <div>
     <v-container v-if="vueloSeleccionado != null">

      <v-card> 
        <v-row class="justify-center" style="flex-wrap:wrap">
         <v-col sm="12">
         <b>ORIGEN</b> {{vueloSeleccionado.origen}} <b>DESTINO</b> {{vueloSeleccionado.destino}}
         </v-col>
         <v-col sm="12">
           Precio {{vueloSeleccionado.precio}} 
         </v-col>
         <v-col sm="12">
         <v-text-field
      v-model="vueloSeleccionado.cedula"
      :counter="10"
      label="cedula"
      required
    ></v-text-field>
         </v-col>
       </v-row>



      </v-card>
      




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
          @click="seleccionarVuelo(item)"
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
  data() {
    return {
      datos: null,
      vueloSeleccionado: null

    }
  },
  methods: {
    seleccionarVuelo(dato) {
      this.vueloSeleccionado = dato
      this.vueloSeleccionado.cedula = ""
      console.log(dato)


    },
    buscarVuelos() {
      fetch('http://localhost:3001/ConsultarVuelos').then(res => res.json()).then(res => this.datos = res.vuelos)
    }
  },
  created() {
    this.buscarVuelos()
  }
}
</script>
<style lang="">
  
</style>
