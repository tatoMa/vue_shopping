<template>
  <v-app light>
    <!--<navigation @searchRecords="searchAppointment"></navigation>-->
    <v-content>
      <section>
        <v-parallax src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1456940081000/photosp/ce9e5480-abbf-4fc5-b7d5-4544f68723b3/stock-photo-technology-office-home-office-startup-coding-hacking-developer-hacker-programmer-ce9e5480-abbf-4fc5-b7d5-4544f68723b3.jpg" height="250">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">About Me</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax src="https://images.pexels.com/photos/34676/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" height="350">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/products"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </v-content>
    <footer_components></footer_components>
  </v-app>
</template>

<script>
import Navigation from './Navigation'
import Footer from './Footer'
import Sharing from './Sharing'

export default {
  name: 'Home',
  components: {
    'navigation': Navigation,
    'footer_components': Footer,
    'sharing': Sharing
  },
  data () {
    return {
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
