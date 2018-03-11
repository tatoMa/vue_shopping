<template>
    <v-flex xs12>
      <v-footer dark height="auto" class="grey darken-3">
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout dark>
              <span class="subheading" style="margin-top: 0.8em; margin-left: 1em">Connected with us!</span>
              <v-spacer></v-spacer>
              <v-btn
                v-for="icon in footerIcon"
                :key="icon"
                icon
                dark
                class="mr-0"
              >
                <v-icon size="1.4em">{{ icon }}</v-icon>
              </v-btn>
            </v-layout>
            <v-divider></v-divider>
          </v-flex>
          <v-layout dark pl-3 pr-3>
            <v-flex xs3>
              <img src="@/assets/logo2.png" style="height: 5em" class="mt-2">
            </v-flex>
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
          <v-divider></v-divider>
          <v-flex xs12 py-1 text-xs-center class="grey darken-4">
            <span class="caption">© Copyright 2018 Jason - All Rights Reserved</span>
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
          title: 'Products',
          children: ['Shopping', 'Blog', 'News']
        },
        {
          title: 'Links',
          children: ['Your account', 'Become an member', 'Shipping Rates', 'Helper']
        }
      ]
    }
  }
}
</script>
