<template>
  <v-app>
    <v-content>
      <toolbar></toolbar>
      <keep-alive>
        <!--<router-view/>-->
      </keep-alive>
      <footerbar></footerbar>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Footerbar from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'toolbar': Toolbar,
    'footerbar': Footerbar
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 0px;
}
</style>
