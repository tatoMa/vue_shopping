<template>
  <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat>
        <v-card-media
          class="white--text"
          height="10em"
          src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 class="text-xs-center">
                <v-avatar size="90">
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="John">
                </v-avatar>
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title primary-title>
          <h2>Login Success</h2>
          <h4 class="headline mb-0">{{ user.name }}</h4>
          <h4 class="headline mb-0">{{ user.email }}</h4>
          <v-btn color="orange" block outline to="/">Back</v-btn>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
