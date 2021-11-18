<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
      
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Salman Sharif"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-actions class="hidden-sm-and-down justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="red"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="red"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="red--text">Me</span>
            </h3>
            <div>
              <p>
                {{aboutMe}}
              </p>
            </div>
          </div>

        <v-flex class="hidden-lg-and-up">
        <v-btn flat block color="red" to="/resume">Check out My Resume</v-btn>
        <v-btn flat block color="red" to="/portfolio">Check out My Projects</v-btn>
        <v-btn flat block color="red" to="/contact">Contact Me</v-btn>
    <v-btn flat block color="red" to="/">Go Back to Main</v-btn>
    </v-flex>
    <div class="hidden-md-and-down">
        <v-btn flat color="red" to="/resume">Check out My Resume</v-btn>
        <v-btn flat color="red" to="/portfolio">Check out My Projects</v-btn>
        <v-btn flat color="red" to="/contact">Contact Me</v-btn>
    <v-btn flat color="red" to="/">Go Back to Main</v-btn>
    </div>
        </v-card-title>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Salman's Portfolio",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Salman's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Salman's Portfolio" },
      { property: 'og:site_name', content: "Salman's Portfolio" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://salmansharif.me' }
    ]
  },
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  computed: {
    aboutMe () { return this.$store.state.resume.about },
    icons () { return this.$store.state.resume.contacts }
  },
  data () {
    return {
      text1: ['Full-Stack Developer', 'Software Engineer', 'Bug Master'],
      leftImage: 'https://i.imgur.com/bU50uS9.jpg',
      rightImage: 'https://i.imgur.com/z3ZoEEw.jpg',
      leftImage2: 'https://i.imgur.com/AQDaDcC.jpg?1',
      rightImage2: 'https://i.imgur.com/1IEYMNS.png',
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 1
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: red;
}
.vue-typer .custom.char.selected {
  color: grey;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: red;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: grey;
}
</style>
