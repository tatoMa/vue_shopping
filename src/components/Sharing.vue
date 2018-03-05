<template>
  <v-layout xs12  text-xs-center>
    <v-flex xs12>
      <div class="text-xs-center">
        <v-bottom-sheet v-model="sheet">
          <v-btn slot="activator" color="purple" dark>Click me</v-btn>
          <v-list>
            <v-subheader>Open in</v-subheader>
            <v-list-tile
              v-for="tile in tiles"
              :key="tile.title"
              @click="sheet = false"
            >
              <v-list-tile-avatar>
                <v-avatar size="32px" tile>
                  <img :src="tile.img" :alt="tile.title">
                </v-avatar>
              </v-list-tile-avatar>
              <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-bottom-sheet>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      // sharing items
      sheet: false,
      tiles: [
        { img: 'https://vuetifyjs.com/static/doc-images/bottom-sheets/keep.png', title: 'Keep' },
        { img: 'https://vuetifyjs.com/static/doc-images/bottom-sheets/inbox.png', title: 'Inbox' },
        { img: 'https://vuetifyjs.com/static/doc-images/bottom-sheets/hangouts.png', title: 'Hangouts' },
        { img: 'https://vuetifyjs.com/static/doc-images/bottom-sheets/messenger.png', title: 'Messenger' },
        { img: 'https://vuetifyjs.com/static/doc-images/bottom-sheets/google.png', title: 'Google+' }
      ]
    }
  }
}
</script>
