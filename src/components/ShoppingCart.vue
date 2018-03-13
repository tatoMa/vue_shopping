<template>
  <div>
    <v-stepper v-model="FinishedSteps" dark>
      <v-stepper-header>
        <v-stepper-step step="1" :complete="FinishedSteps > 1">Select</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="FinishedSteps > 2">Shipping</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Payment</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1" class="pa-2">
          <!--<v-card class="white&#45;&#45;text">-->
            <!--<v-container fluid grid-list-lg>-->
              <!--<v-layout row v-for="(shopCartitem, index) in shopCart">-->
                <!--<v-layout row v-for="(product, index) in products">-->
                <!--<v-flex xs4>-->
                  <!--<v-card-media-->
                    <!--src="https://vuetifyjs.com/static/doc-images/cards/foster.jpg"-->
                    <!--height="85px"-->
                    <!--contain-->
                  <!--&gt;</v-card-media>-->
                <!--</v-flex>-->
                <!--<v-flex xs8>-->
                  <!--<div>-->
                    <!--<div class="headline">Supermodel</div>-->
                    <!--<div>Foster the People</div>-->
                  <!--</div>-->
                <!--</v-flex>-->
                <!--</v-layout>-->
              <!--</v-layout>-->
            <!--</v-container>-->
          <!--</v-card>-->
          <!--<v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>-->
          <v-list three-line class="py-0">
            <template v-for="(item, index) in shopCart">
              <template v-for="(product, index) in products">
              <!--<v-subheader v-if="menuInfo">{{ menuInfo }}</v-subheader>-->
                <v-list-tile  v-if="product.ID === item.ID" avatar :key="item.ID" @click="">
                  <v-list-tile-avatar tile size="70" class="pr-3 mt-0">
                    <img :src="'https://picsum.photos/500/'+(product.quantity*6)">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="product.product_name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="product.Product_info_short"></v-list-tile-sub-title>
                    <v-list-tile-sub-title style="color: darkorange" v-html="product.price"></v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon ripple>
                      <v-icon color="grey lighten-1">add</v-icon>
                    </v-btn>
                    <v-list-tile-action-text class="mr-1">1</v-list-tile-action-text>
                    <!--<v-list-tile-action-text class="mr-1">{{ product.quantity }}</v-list-tile-action-text>-->
                    <v-btn icon ripple @click="removeQuantity(item)">
                      <v-icon color="grey lighten-1">remove</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
              <!--{{showID}}-->
              <v-divider></v-divider>
            </template>
          </v-list>
          <v-layout row>
            <v-flex xs5>
              <v-btn outline
                     dark
                     large
                     block
                     color="grey lighten-1"
                     class="ma-0 mt-2"
                     to="/"
              >
                <v-icon class="mr-3">backspace</v-icon>
                Back
              </v-btn>
            </v-flex>
            <v-flex xs5 offset-xs2>
              <v-btn outline
                     dark
                     large
                     block
                     color="orange darken-3"
                     @click.native="FinishedSteps = 2"
                     class="ma-0 mt-2"
              >
                Continue
                <v-icon class="ml-3">skip_next</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="FinishedSteps = 3">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="FinishedSteps = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <footer_components></footer_components>
  </div>
</template>

<script>
import Footer from './Footer'
import {db} from '@/components/firebase.js'

export default {
  name: 'ShoppingCart',
  components: {
    'footer_components': Footer
  },
  data () {
    return {
      FinishedSteps: 0,
      boughtIDs: [],
      menuInfo: 'Please view the items on your shopping cart'
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
    },
    shopCart: {
      source: db.ref('shopCart'),
      readyCallback: function () {
        // this.loadingProducts = false
      }
    }
  },
  methods: {
    searchAppointment (text) {
      this.searchText = text
    },
    showID (shopCartitem) {
      // console.log(this.$firebaseRefs.shopCart.child('ID'))
      return this.$firebaseRefs.shopCart.child(shopCartitem['ID'])
      // this.products.filter(item => {
      //   return (
      //     item.product_name.toLowerCase().match(this.searchText.toLowerCase())
      //   )
      // })
    },
    removeQuantity (shopCartitem) {
      // this.$firebaseRefs.shopCart.child(shopCartitem['ID']).remove()
      this.$firebaseRefs.shopCart.child(shopCartitem['.key']).remove()
      console.log('remove')
    }
  },
  computed: {
    // searchedApts () {
    //   console.log(this.shopCart.child(['ID']))
    //   // return this.shopCart.filter(shopCartitem => {
    //   //   return (
    //   //     item.product_name.toLowerCase().match(this.searchText.toLowerCase())
    //   //   )
    //   // }
    //   // )
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link {
    text-decoration: none;
  }
</style>
