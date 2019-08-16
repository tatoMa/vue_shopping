<template>
  <div>
    <navigation @searchRecords="searchAppointment"></navigation>
<!--grid layout-->
    <v-progress-linear v-show="loadingProducts" :indeterminate="loadingProducts"></v-progress-linear>
    <!--<v-slide-x-transition>-->
    <v-layout column mt-2 v-show="!loadingProducts" v-scroll="onScroll">
      <v-flex xs12 md10 offset-md1>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-btn
                fab
                bottom
                right
                fixed
                flat
                color="deep-orange accent-3"
                @click.native.stop="goToTop()"
                v-if="offsetTop>150"
              >
                <v-icon style="opacity:0.9">fas fa-angle-up</v-icon>
              </v-btn>
              <v-flex
                xs6 sm4 md3
                v-for="card in searchedApts"
                :key="card.ID"
              >
                <v-card>
                  <!--<router-link :to="'/products/'+card.ID">-->
                  <v-card-media
                    :src="imageUrl+(card.quantity*6)"
                    height="180px"
                    @click="getItemDataFromProductList(card), getWidth(), closeList=!closeList"
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
              <h2 class="red--text" v-show="searchedApts.length == 0">NO RESULT FOUND</h2>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!--</v-slide-x-transition>-->
    <!--<p>{{ products }}</p>-->
    <!--<sharing></sharing>-->
    <!--<v-slide-x-transition>-->
<!--Item info detail page--------------------------------------->
    <v-navigation-drawer
      v-model="closeList"
      app
      :width="deviceWidth"
      dark
      class="pb-0 mb-0"
    >
      <v-layout column v-show="!loadingProducts && closeList">
        <v-card>
          <v-container grid-list-md>
            <v-layout>
            <v-btn
              large outline @click="closeList=!closeList, searchText='', deviceWidth=0" class="mb-2 ml-1 pr-2"
            >
              <v-icon size="16px" class="mr-3">fas fa-chevron-left</v-icon>
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4" to="/cart">
              <v-badge color="orange">
                <span slot="badge" dark small><div>{{shopCart.length}}</div></span>
                <v-icon size="1.5em" >fas fa-shopping-cart</v-icon>
              </v-badge>
            </v-btn>
            </v-layout>
            <!--<v-carousel>-->
              <!--&lt;!&ndash;:src="require('@/assets/home1.jpg')"&ndash;&gt;-->
              <!--<v-carousel-item-->
                <!--v-for="(item,i) in items"-->
                <!--:src="getItemImageUrl" :key="i"-->
                <!--lazy-->
                <!--dark-->
              <!--&gt;-->
                <!--<p class="display-2">{{ item.product_name }}</p>-->
              <!--</v-carousel-item>-->
            <!--</v-carousel>-->
            <v-card-media :src="imageUrl+(item.quantity*6)" height="250px">
              <p class="display-2">{{ item.product_name }}</p>
            </v-card-media>
            <v-layout>
              <v-flex xs12>
                <v-card>
                  <v-container fluid v-bind="{ [`grid-list-xs`]: true }">
                    <v-layout row wrap>
                      <v-flex
                        xs4 sm4 md3
                        v-for="n in 6"
                        :key="n"
                      >
                        <v-card flat tile>
                          <v-card-media
                            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                            height="130px"
                          >
                          </v-card-media>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
            <v-card-title>
              <div>
                <div class="headline mb-0">{{ item.product_name }}</div>
                <v-flex xs12>
                  <div class="display-1">{{ item.price }} </div>
                </v-flex>
                <v-layout>
                  <v-flex xs3>
                    <v-select
                      :items="sizeSelection"
                      label="Size"
                      single-line
                    ></v-select>
                  </v-flex>
                  <v-flex xs3>
                    <v-select
                      :items="sizeSelection"
                      label="Quantity"
                      single-line
                    ></v-select>
                  </v-flex>
                  <v-flex  class="text-xs-right">
                    <v-btn color="success" @click="addToCart">
                      <v-icon size="16px" class="mr-3">fas fa-cart-plus</v-icon>
                      ADD TO CART
                    </v-btn>
                  </v-flex>
                </v-layout>
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
            <v-btn
              large outline @click="closeList=!closeList, searchText='', deviceWidth=0" class="mb-2 ml-0 pr-2"
            >
              <v-icon size="16px" class="mr-3">fas fa-chevron-left</v-icon>
              Back
            </v-btn>
            <!--<v-card-actions>-->
              <!--<v-btn-->
                <!--outline @click="closeList=!closeList, searchText='', itemClicked=!itemClicked"-->
              <!--&gt;-->
                <!--<v-icon size="16px" class="mr-3">fas fa-chevron-left</v-icon>-->
                <!--Back-->
              <!--</v-btn>-->
              <!--<v-spacer></v-spacer>-->
              <!--<v-btn color="success">-->
                <!--<v-icon size="16px" class="mr-3">fas fa-cart-plus</v-icon>-->
                <!--ADD TO CART-->
              <!--</v-btn>-->
              <!--<v-btn color="success">-->
                <!--<v-icon size="16px" class="mr-3">fas fa-dollar-sign</v-icon>-->
                <!--BUY IT NOW-->
              <!--</v-btn>-->
            <!--</v-card-actions>-->
          </v-container>
        </v-card>
      </v-layout>
    </v-navigation-drawer>
    <!--</v-slide-x-transition>-->
    <!--<footer_components></footer_components>-->
  </div>
</template>

<script>
import {db} from '@/components/firebase.js'
import Navigation from './Navigation'
// import Footer from './Footer'

export default {
  name: 'ProductList',
  components: {
    'navigation': Navigation
    // 'footer_components': Footer
  },
  data () {
    return {
      // grid
      imageUrl: 'https://picsum.photos/500/',
      loadingProducts: true,
      searchText: '',
      numberOfListItems: 40,
      item: {
        ID: 0,
        product_name: '',
        quantity: 0,
        manufactory: '',
        product_info_long: ''
      },
      closeList: false,
      // scrollYPosition: 0,
      // itemClicked: false,
      deviceWidth: 0,
      // items: [
      //   {
      //     src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
      //   },
      //   {
      //     src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
      //   },
      //   {
      //     src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
      //   },
      //   {
      //     src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
      //   }
      // ],
      sizeSelection: [
        { text: '1' },
        { text: '2' },
        { text: '3' }],
      offsetTop: 0
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
  mounted () {
    console.log('mounted called.')
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    searchAppointment (text) {
      this.searchText = text
      this.closeList = false
    },
    getItemDataFromProductList (item) {
      this.item = item
      // if (this.scrollYPosition > 170) {
      //   // window.scrollTo(0, 170)
      // }
      // console.log(window.scrollY)
    },
    goToTop () {
      window.scrollTo(0, 0)
    },
    // getScrollYPosition () {
    //   this.scrollYPosition = window.scrollY
    //   console.log(this.scrollYPosition)
    // },
    // backToListWithSavedYPosition () {
    //   window.scrollTo(0, this.scrollYPosition)
    //   this.scrollYPosition = 0
    // },
    getWidth () {
      this.deviceWidth = window.innerWidth
      console.log('width', this.deviceWidth)
    },
    addToCart () {
      this.$firebaseRefs.shopCart.push({
        ID: this.item.ID
      })
      console.log(this.item.ID)
    }
  },
  computed: {
    searchedApts () {
      return this.products.filter(item => {
        return (
          item.product_name.toLowerCase().match(this.searchText.toLowerCase())
        )
      }
      )
    }
    // getItemImageUrl () {
    //   if (this.item.quantity === 0 || this.item.quantity == null) {
    //     return this.imageUrl + (40 * 6)
    //   } else {
    //     return this.imageUrl + (this.item.quantity * 6)
    //   }
    // }
  }
  // created () {
  //   this.getWidth()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link {
    text-decoration: none;
  }
</style>
