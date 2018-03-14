<template>
  <v-app light>
<!--side drawer-->
    <v-navigation-drawer
      temporary
      v-model="drawer"
      dark
      absolute
    >
      <!--user profile with avatar, info and buttons-->
      <v-card flat v-if="userIsAuthenticated">
        <v-card-media
          class="white--text"
          height="10em"
          src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 class="text-xs-center">
                <v-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="John">
                </v-avatar>
                <v-divider></v-divider>
                <span class="headline">{{ $store.getters.user.email }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">ID: Jason</span><br>
            <span>Email: {{ $store.getters.user.email }}</span><br>
            <span>Location: Melbourne</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-flex xs12 class="text-xs-center">
            <v-btn outline color="orange darken-3">
              <v-icon class="pr-2">account_circle</v-icon>
              Profile
            </v-btn>
          </v-flex>
          <v-flex xs12 class="text-xs-center">
            <v-btn outline color="red darken-3">
              <v-icon class="pr-2">exit_to_app</v-icon>
              Logout
            </v-btn>
          </v-flex>
        </v-card-actions>
        <v-divider></v-divider>
      </v-card>
      <!--profile of side menu for non-signed-in users as guest menu-->
      <v-card v-if="!userIsAuthenticated">
        <v-card-media
          class="white--text"
          height="10em"
          src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 class="text-xs-center">
                <v-avatar>
                  <v-icon size="5em">account_circle</v-icon>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <v-flex class="text-xs-center">
            <span>Please Login or sign up</span>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-flex xs12 class="text-xs-center">
            <v-btn outline color="orange darken-3" to="./signin">
              <v-icon class="pr-2">lock_open</v-icon>
              Sign in
            </v-btn>
          </v-flex>
          <v-flex xs12 class="text-xs-center">
            <v-btn outline color="red darken-3" to="./signup">
              <v-icon class="pr-2">person_add</v-icon>
              Register
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
      <!--navigation menu-->
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in sideBarNavigation" :key="item.title" v-if="userIsAuthenticated" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <!--function menu-->
        <v-list-tile v-for="item in sideBarfunctions" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<!--Main Tool Bar-->
    <div>
      <v-toolbar color="indigo" dark tabs dense>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Welcome</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-4" v-if="userIsAuthenticated" to="/cart">
          <v-badge color="orange">
            <span slot="badge" dark small><div>{{shopCart.length}}</div></span>
              <v-icon size="1.5em" >fas fa-shopping-cart</v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon class="mr-4" v-else to="/signin">
            <v-icon size="1.5em" >fas fa-shopping-cart</v-icon>
        </v-btn>
        <!--main tabs for navigation-->
        <v-tabs
          color="indigo"
          slot="extension"
          v-model="tab"
          grow
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in tabItems" :to="item.link" :key="item.index">
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
// import Home from './Home'
// import ProductList from './ProductList'
// import About from './About'
import {db} from '@/components/firebase.js'

export default {
  name: 'Testing',
  // components: {
  //   'home': Home,
  //   'productList': ProductList,
  //   'about': About
  // },
  data () {
    return {
      signInUser: '',
      tab: null,
      tabItems: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Shopping',
          link: '/products'
        },
        {
          name: 'About',
          link: '/about'
        }
      ],
      text: [
        'web tab1', 'shopping t2', 'videos t3'
      ],
      components: [
        'home', 'productList', 'about'
      ],
      drawer: false,
      mini: false,
      sideBarNavigation: [
        {
          title: 'Home',
          icon: 'dashboard',
          link: '/'
        },
        {
          title: 'Shopping',
          icon: 'shop',
          link: '/products'
        },
        {
          title: 'About',
          icon: 'question_answer',
          link: '/about'
        }
      ],
      sideBarfunctions: [
        { title: 'Setting', icon: 'settings' },
        { title: 'Contact us', icon: 'message' },
        { title: 'Help', icon: 'help' }
      ]
    }
  },
  firebase: {
    shopCart: {
      source: db.ref('shopCart'),
      readyCallback: function () {
        // this.loadingProducts = false
      }
    }
  },
  methods: {
    // gettingSignInUser () {
    //   return this.$store.getters.user.email
    // }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  gettingSignInUser () {
    this.signInUser = this.$store.getters.user.email
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link {
    text-decoration: none;
  }
</style>
