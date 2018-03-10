<template>
  <div style="background-color: #424242; height: 100%">
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm8 md4 offset-sm2 offset-md4>
        <v-card class="elevation-12" dark>
          <form @submit.prevent="onSignin">
          <v-toolbar dark color="indigo" flat>
            <v-toolbar-title>Please Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person"
                            name="email"
                            label="Mail"
                            id="email"
                            v-model="email"
                            type="email"
                            required></v-text-field>
              <v-text-field prepend-icon="lock"
                            name="password"
                            label="Password"
                            id="password"
                            v-model="password"
                            type="password"
                            required></v-text-field>
            </v-form>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn large color="success" type="submit" :disabled="loading" :loading="loading">
              <v-icon large class="pr-3">fas fa-unlock</v-icon>
              <span slot="loader" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
              Login
            </v-btn>
          </div>
          <div class="ml-3">
            <span class="title"> Login With:</span>
          </div>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex>
              <div class="text-xs-center">
                <v-btn flat class="red" dark :disabled="loading" :loading="loading" @click.prevent="onSigninGoogle">Google
                  <v-icon right dark>lock_open</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                   </span>
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="text-xs-center">
                <v-btn flat primary dark :disabled="loading" :loading="loading" @click.prevent="onSigninFacebook">Facebook
                  <v-icon right dark>lock_open</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                   </span>
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="text-xs-center">
                <v-btn flat dark :disabled="loading" :loading="loading" @click.prevent="onSigninGithub">Github
                  <v-icon right dark>lock_open</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                   </span>
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="text-xs-center">
                <v-btn flat info dark :disabled="loading" :loading="loading" @click.prevent="onSigninTwitter">Twitter
                  <v-icon right dark>lock_open</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                   </span>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
<!--/////////////////////////////////-->
    <!--<v-layout row v-if="error">-->
      <!--<v-flex xs12 sm6 offset-sm3>-->
        <!--<app-alert @dismissed="onDismissed" :text="error.message"></app-alert>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
    <!--<v-layout row>-->
      <!--<v-flex xs12 sm6 offset-sm3>-->
        <!--<v-card>-->
          <!--<v-card-text>-->
            <!--<v-container>-->
              <!--<form @submit.prevent="onSignin">-->
                <!--<v-layout row>-->
                  <!--<v-flex xs12>-->
                    <!--&lt;!&ndash;<v-text-field&ndash;&gt;-->
                      <!--&lt;!&ndash;name="email"&ndash;&gt;-->
                      <!--&lt;!&ndash;label="Mail"&ndash;&gt;-->
                      <!--&lt;!&ndash;id="email"&ndash;&gt;-->
                      <!--&lt;!&ndash;v-model="email"&ndash;&gt;-->
                      <!--&lt;!&ndash;type="email"&ndash;&gt;-->
                      <!--&lt;!&ndash;required></v-text-field>&ndash;&gt;-->
                  <!--</v-flex>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                  <!--<v-flex xs12>-->
                    <!--&lt;!&ndash;<v-text-field&ndash;&gt;-->
                      <!--&lt;!&ndash;name="password"&ndash;&gt;-->
                      <!--&lt;!&ndash;label="Password"&ndash;&gt;-->
                      <!--&lt;!&ndash;id="password"&ndash;&gt;-->
                      <!--&lt;!&ndash;v-model="password"&ndash;&gt;-->
                      <!--&lt;!&ndash;type="password"&ndash;&gt;-->
                      <!--&lt;!&ndash;required></v-text-field>&ndash;&gt;-->
                  <!--</v-flex>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                  <!--<v-flex xs12>-->
                    <!--<div class="text-xs-center">-->
                    <!--<v-btn round  type="submit" :disabled="loading" :loading="loading">-->
                      <!--Sign in-->
                      <!--<v-icon right>lock_open</v-icon>-->
                      <!--<span slot="loader" class="custom-loader">-->
                        <!--<v-icon light>cached</v-icon>-->
                       <!--</span>-->
                    <!--</v-btn>-->
                    <!--</div>-->
                    <!--<div class="text-xs-center">-->
                      <!--<v-btn round class="red" dark :disabled="loading" :loading="loading" @click.prevent="onSigninGoogle">Login with Google-->
                        <!--<v-icon right dark>lock_open</v-icon>-->
                        <!--<span slot="loader" class="custom-loader">-->
                        <!--<v-icon light>cached</v-icon>-->
                       <!--</span>-->
                      <!--</v-btn>-->
                    <!--</div>-->
                    <!--<div class="text-xs-center">-->
                      <!--<v-btn round primary dark :disabled="loading" :loading="loading" @click.prevent="onSigninFacebook">Login with Facebook-->
                        <!--<v-icon right dark>lock_open</v-icon>-->
                        <!--<span slot="loader" class="custom-loader">-->
                        <!--<v-icon light>cached</v-icon>-->
                       <!--</span>-->
                      <!--</v-btn>-->
                    <!--</div>-->
                    <!--<div class="text-xs-center">-->
                      <!--<v-btn round dark :disabled="loading" :loading="loading" @click.prevent="onSigninGithub">Login with Github-->
                        <!--<v-icon right dark>lock_open</v-icon>-->
                        <!--<span slot="loader" class="custom-loader">-->
                        <!--<v-icon light>cached</v-icon>-->
                       <!--</span>-->
                      <!--</v-btn>-->
                    <!--</div>-->
                    <!--<div class="text-xs-center">-->
                      <!--<v-btn round info dark :disabled="loading" :loading="loading" @click.prevent="onSigninTwitter">Login with Twitter-->
                        <!--<v-icon right dark>lock_open</v-icon>-->
                        <!--<span slot="loader" class="custom-loader">-->
                        <!--<v-icon light>cached</v-icon>-->
                       <!--</span>-->
                      <!--</v-btn>-->
                    <!--</div>-->
                  <!--</v-flex>-->
                <!--</v-layout>-->
              <!--</form>-->
            <!--</v-container>-->
          <!--</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    },
    onSigninTwitter () {
      this.$store.dispatch('signUserInTwitter')
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
