<template>
  <div>
    <navigation @searchRecords="searchAppointment"></navigation>
<!--grid layout-->
    <v-progress-linear v-if="loadingProducts" :indeterminate="loadingProducts"></v-progress-linear>
    <v-layout column mt-2 v-if="!loadingProducts">
      <v-flex xs12 md10 offset-md1>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs6 sm4 md3
                v-for="card in searchedApts"
                :key="card.ID"
              >
                <v-card>
                  <router-link :to="'/products/'+card.ID">
                  <v-card-media
                    :src="imageUrl+(card.quantity*6)"
                    height="200px"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text">
                              {{ card.product_name }}
                          </span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  </router-link>
                  <v-card-actions>
                    <v-btn flat color="pink">{{ card.price }}</v-btn>
                    <!--<v-btn flat color="pink">@{{ card.manufactory }}</v-btn>-->
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <h2 class="red--text" v-if="searchedApts.length == 0">NO RESULT FOUND</h2>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!--<p>{{ products }}</p>-->
    <sharing></sharing>
    <footer_components></footer_components>
  </div>
</template>

<script>
import {db} from '@/components/firebase.js'
import Navigation from './Navigation'
import Footer from './Footer'
import Sharing from './Sharing'

export default {
  name: 'ProductList',
  components: {
    'navigation': Navigation,
    'footer_components': Footer,
    'sharing': Sharing
  },
  data () {
    return {
      // grid
      imageUrl: 'https://picsum.photos/500/',
      cards: [
        { title: 'Pre-fab homes', src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg', flex: 6 }
      ],
      loadingProducts: true,
      searchText: '',
      numberOfListItems: 40
    }
  },
  firebase: {
    products: {
      source: db.ref('products').limitToFirst(40),
      readyCallback: function () {
        this.loadingProducts = false
      }
      // Optional, allows you to handle any errors.
      // cancelCallback (err) {
      //   console.error(err)
      // }
    }
  },
  created () {
    // this.$firebaseRefs.users.push({name: 'name', val: 'Jason'})
    // console.log(this.$firebaseRefs.users.push({name: 'name', val: 'Jason'}))
  },
  methods: {
    searchAppointment (text) {
      this.searchText = text
    }
  },
  computed: {
    searchedApts () {
      return this.products.filter(function (item) {
        return (
          item.product_name.toLowerCase().match(this.searchText.toLowerCase())
        )
      }.bind(this)
      )
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
