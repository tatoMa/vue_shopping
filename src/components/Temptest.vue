<template>
  <v-app light>
<!--side drawer-->
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="mini"
      dark
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in sideBarItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<!--Tool Bar-->
    <div>
      <v-toolbar color="indigo" dark tabs>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Welcome</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-1">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon class="mr-4">
          <v-badge color="orange">
            <span slot="badge" dark small><div>6</div></span>
              <v-icon size="1.5em" >fas fa-shopping-cart</v-icon>
          </v-badge>
        </v-btn>
        <v-tabs
          color="indigo"
          slot="extension"
          v-model="tab"
          grow
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in tabItems" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in tabItems" :key="item">
          <v-card flat>
            <component v-bind:is="components[index]"></component>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-app>
</template>

<script>
import Navigation from './Navigation'
import Footer from './Footer'
import Sharing from './Sharing'
import Home from './Home'
import ProductList from './ProductList'
import About from './About'

export default {
  name: 'Testing',
  components: {
    'navigation': Navigation,
    'footer_components': Footer,
    'sharing': Sharing,
    'home': Home,
    'productList': ProductList,
    'about': About
  },
  data () {
    return {
      tab: null,
      tabItems: [
        'Home', 'shopping', 'About'
      ],
      text: [
        'web tab1', 'shopping t2', 'videos t3'
      ],
      components: [
        'home', 'productList', 'about'
      ],
      drawer: false,
      mini: false,
      sideBarItems: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  },
  methods: {
    searchAppointment (text) {
      this.searchText = text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link {
    text-decoration: none;
  }
</style>
