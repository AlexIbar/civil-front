<template>
  <v-app>
    <v-app-bar app color="grey darken-3" dark class="px-4" height="85px">
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain :src="logo" transition="scale-transition"
          width="80" />
      </div>
      <v-container>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>

      <v-btn :loading="loading3" :disabled="loading3" color="blue darken-3" class="ma-2 white--text"
        @click="loader = 'loading3'" height="45px">
        Ingresar
        <v-icon right dark>
          mdi-account-arrow-right-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <router-link to="/" class-active="" class="d-flex links" exact>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/reservar" class="d-flex links" exact>
              <v-list-item-icon>
              <v-icon>mdi-airplane</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Reservar</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
nav li:hover,
nav li:active {
  background-color: indianred;
  cursor: pointer;
}
.links{
  text-decoration: none;
}
</style>
<script>

export default {
  comments: {
    data(){
      return {
        imagen:'./imagenes/logo.png'
      }
    }
  },
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
