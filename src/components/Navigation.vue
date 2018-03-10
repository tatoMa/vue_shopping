<template>
  <div>
<!--&lt;!&ndash;side drawer&ndash;&gt;-->
    <!--<v-navigation-drawer-->
      <!--temporary-->
      <!--v-model="drawer"-->
      <!--:mini-variant="mini"-->
      <!--dark-->
      <!--absolute-->
    <!--&gt;-->
      <!--<v-list class="pa-1">-->
        <!--<v-list-tile v-if="mini" @click.stop="mini = !mini">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>chevron_right</v-icon>-->
          <!--</v-list-tile-action>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile avatar tag="div">-->
          <!--<v-list-tile-avatar>-->
            <!--<img src="https://randomuser.me/api/portraits/men/85.jpg" >-->
          <!--</v-list-tile-avatar>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>John Leider</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--<v-list-tile-action>-->
            <!--<v-btn icon @click.stop="mini = !mini">-->
              <!--<v-icon>chevron_left</v-icon>-->
            <!--</v-btn>-->
          <!--</v-list-tile-action>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
      <!--<v-list class="pt-0" dense>-->
        <!--<v-divider light></v-divider>-->
        <!--<v-list-tile v-for="item in items" :key="item.title">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>{{ item.icon }}</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
<!--Navigation-->
    <v-toolbar
      color="indigo"
      dark
      dense
      flat
    >
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <!--<v-flex xs4>-->
        <!--<v-toolbar-title>Testing</v-toolbar-title>-->
      <!--</v-flex>-->
      <v-layout row>
        <v-flex xs10 sm11>
          <v-text-field
            prepend-icon="search"
            label="Search"
            solo-inverted
            flat
            v-model="searchText"
            class="ml-2"
          ></v-text-field>
        </v-flex>
        <v-flex xs2 sm1 class="text-xs-center">
          <v-btn icon>
            <v-icon>fas fa-sort</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <!--<v-toolbar-title class="white&#45;&#45;text" slot="extension" style="margin: 0px">-->
        <!--<router-link to="/">-->
          <!--<v-btn flat color="white">Home</v-btn>-->
        <!--</router-link>-->
      <!--</v-toolbar-title>-->
      <!--<v-toolbar-title class="white&#45;&#45;text" slot="extension" style="margin: 0px">-->
        <!--<router-link to="/products">-->
          <!--<v-btn flat color="white">Products</v-btn>-->
        <!--</router-link>-->
      <!--</v-toolbar-title>-->
      <!--<v-toolbar-title class="white&#45;&#45;text" slot="extension" style="margin: 0px">-->
        <!--<router-link to="/about">-->
          <!--<v-btn flat color="white">About</v-btn>-->
        <!--</router-link>-->
      <!--</v-toolbar-title>-->
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: ['naviItems'],
  data () {
    return {
      // drawer
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null,
      searchText: ''
    }
  },
  watch: {
    searchText () {
      this.$emit('searchRecords', this.searchText)
    }
  }
}
</script>
<style scoped>
  a:link {
    text-decoration: none;
  }
</style>
