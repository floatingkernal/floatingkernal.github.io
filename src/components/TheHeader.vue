<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="240">
      <v-list class="pt-4">
        <v-list-tile v-for="nav in navs" :key="nav" active-class="red--text" :to="'/'+nav.to">
          <v-list-tile-content>
            <v-list-tile-title>{{nav.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <router-link to="/" style="text-decoration: none; color: inherit;">
        <span class="font-weight-light">Salman</span>
        <span class="red--text">Sharif</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="nav in navs" :key="nav" flat :to="'/'+nav.to" active-class="red--text headline">{{nav.name}}</v-btn>
        <v-btn @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    goDark: {
      type: Boolean
    }
  },
  data () {
    return {
      drawer: null,
      navs: [
        {name:'Home', to:""},
        {name:'Resume', to:"resume"},
        {name:'Portfolio', to:"portfolio"},
        {name:'Contact', to:"contact"},
      ]
    }
  },
  methods: {
    changeTheme () {
      this.$emit('changeTheme', this.goDark)
    }
  }
}
</script>

<style >
</style>
