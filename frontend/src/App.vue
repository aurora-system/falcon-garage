<template>
  <v-app class="main-app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click="routePage('home')">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('about')">
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('orders')">
          <v-list-item-action>
            <v-icon>shopping_cart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('products')">
          <v-list-item-action>
            <v-icon>wallet_giftcard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('inouthistory')">
          <v-list-item-action>
            <v-icon>loop</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products In/Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('expenses')">
          <v-list-item-action>
            <v-icon>money</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Expenses</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="routePage('reports')">
          <v-list-item-action>
            <v-icon>equalizer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Falcon</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">v1.0</span>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app color="blue" dark>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

// import Router from './router.js';
// const router = Router;

export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: true
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    routePage(name) {
      this.$router.push({ name })
    }
  }
};
</script>

<style scoped>

.main-app  { 
  font-family: 'Raleway', sans-serif;
}
</style>
