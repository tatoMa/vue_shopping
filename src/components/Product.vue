<template>
  <div>
    <!--<navigation></navigation>-->
      <!--grid layout-->
    <v-progress-linear v-if="loading" :indeterminate=loading></v-progress-linear>
      <v-layout mt-2 column v-if="!loading">
        <v-flex xs12 md10 offset-md1>
          <v-card>
            <v-container fluid grid-list-md>
              <v-card-media :src="imageUrl" height="350px" style="background-position: top">
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
      item: [],
      loading: true,
      itemID: null
    }
  },
  firebase: {
    products: {
      source: db.ref('products'),
      readyCallback: function () {
        console.log(this.products)
        this.item = this.products[this.itemID]
        console.log(this.item)
        this.imageUrl += this.item.quantity * 6
        this.loading = false
      }
      // Optional, allows you to handle any errors.
      // cancelCallback (err) {
      //   console.error(err)
      // }
    }
  },
  created () {
    this.itemID = this.$route.params.id - 1
    // console.log(this.itemID)
    // console.log(this.products)
    // this.item.push(this.products[0])
    // console.log((this.item))
    // this.$firebaseRefs.users.push({name: 'name', val: 'Jason'})
    // console.log(this.$firebaseRefs.users.push({name: 'name', val: 'Jason'}))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
