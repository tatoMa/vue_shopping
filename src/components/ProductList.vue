<template>
  <div>
    <navigation @searchRecords="searchAppointment"></navigation>
<!--grid layout-->
    <v-progress-linear v-if="loadingProducts" :indeterminate="loadingProducts"></v-progress-linear>
    <!--<v-slide-x-transition>-->
    <v-layout column mt-2 v-if="!loadingProducts && !closeList">
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
                  <!--<router-link :to="'/products/'+card.ID">-->
                  <v-card-media
                    :src="imageUrl+(card.quantity*6)"
                    height="200px"
                    @click="getScrollYPosition(), getItemDataFromProductList(card), closeList=!closeList"
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
                  <!--</router-link>-->
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
    <!--</v-slide-x-transition>-->
    <!--<p>{{ products }}</p>-->
    <!--<sharing></sharing>-->
    <!--<v-slide-x-transition>-->
    <v-layout mt-2 column v-if="!loadingProducts && closeList">
      <v-flex xs12 md10 offset-md1>
        <v-card>
          <v-container fluid grid-list-md>
            <v-btn
              large outline @click="closeList=!closeList, searchText=''" class="mb-2 ml-0 pr-2"
            >
              <v-icon size="16px" class="mr-3">fas fa-chevron-left</v-icon>
              Back
            </v-btn>
            <v-card-media :src="imageUrl+(item.quantity*6)" height="350px">
            </v-card-media>
            <v-card-title>
              <div>
                <div class="headline mb-0">{{ item.product_name }}</div>
                <div class="display-1">{{ item.price }} </div>
                <v-divider></v-divider>
                <br/>
                <div>
                  <strong class="subheadline">Quanity: {{ item.quantity }}</strong>
                </div>
                <div>
                  <strong class="subheadline">Manufactory: {{ item.manufactory }}</strong>
                </div>
                <br>
                <div class="body-1">{{ item.product_info_long }}{{ item.product_info_long }}{{ item.product_info_long }}{{ item.product_info_long }}</div>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success">
                <v-icon size="16px" class="mr-3">fas fa-cart-plus</v-icon>
                ADD TO CART
              </v-btn>
              <v-btn color="success">
                <v-icon size="16px" class="mr-3">fas fa-dollar-sign</v-icon>
                BUY IT NOW
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!--</v-slide-x-transition>-->
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
      numberOfListItems: 40,
      item: {
        product_name: '',
        quantity: 0,
        manufactory: '',
        product_info_long: ''
      },
      closeList: false,
      show: false,
      scrollYPosition: 0
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
  methods: {
    searchAppointment (text) {
      this.searchText = text
      this.closeList = false
    },
    getItemDataFromProductList (item) {
      this.item = item
      if (this.scrollYPosition > 170) {
        window.scrollTo(0, 170)
      }
      // console.log(window.scrollY)
    },
    getScrollYPosition () {
      this.scrollYPosition = window.scrollY
      console.log(this.scrollYPosition)
    },
    backToListWithSavedYPosition () {
      window.scrollTo(0, this.scrollYPosition)
      this.scrollYPosition = 0
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
