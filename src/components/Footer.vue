<template>
    <v-flex xs12>
      <v-footer height="auto" class="grey darken-3">
        <v-layout row wrap >
          <v-flex xs12>
            <v-layout class="indigo white--text">
              <p class="subheading" style="margin-top: 1em; margin-left: 1em">Connected with us!</p>
              <v-spacer></v-spacer>
              <v-btn
                v-for="icon in footerIcon"
                :key="icon"
                icon
                dark
                class="mx-1"
              >
                <v-icon size="20px">{{ icon }}</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout class="grey lighten-3" pl-3 pr-3>
              <v-flex
                v-for="(col, i) in footerInfo"
                :key="i"
                xs3
              >
                <span class="body-2" v-text="col.title.toUpperCase()"/>
                <div
                  v-for="(child, i) in col.children"
                  :key="i"
                  v-text="child"
                />
              </v-flex>
              <v-flex xs3 layout column>
                <span class="body-2">CONTACT</span>
                <div>
                  <v-icon size="16px" class="mr-3">fa-home</v-icon>
                  New York, NY 10012, US
                </div>
                <div>
                  <v-icon size="16px" class="mr-3">fa-envelope</v-icon>
                  info@gmail.com
                </div>
                <div>
                  <v-icon size="16px" class="mr-3">fa-phone</v-icon>
                  + 01 234 567 88
                </div>
                <div>
                  <v-icon size="16px" class="mr-3">fa-print</v-icon>
                  + 01 234 567 89
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 py-1 text-xs-center white--text>
            &copy;2018 — <strong>Jason</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-flex>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      // footer
      footerIcon: ['fab fa-facebook-f', 'fab fa-twitter', 'fab  fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      footerInfo: [
        {
          title: 'Company Name',
          children: ['My own testing web application']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        }
      ]
    }
  }
}
</script>
