<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>My</span>
      <span class="red--text">Projects</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-hover v-slot="{ hover }">
              <v-card hover flat color="transparent">
                <v-img
                  :src="project.poster"
                  :alt="project.title"
                  height="230"
                  lazy-src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover && project.desc"
                      class="d-flex black justify-center align-center white--text pa-4"
                      style="height: 100%; opacity:70%"
                    >
                      {{ project.desc }}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-title primary-title class="justify-center">{{
                  project.name
                }}</v-card-title>
              </v-card>
            </v-hover>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-card-title class="headline">{{ project.name }}</v-card-title>
          <v-img :src="project.poster"></v-img>
          <v-card-text v-if="project.desc">
            <p>{{ project.desc }}</p>
          </v-card-text>
          <v-card-text v-if="project.tech">
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip
              v-for="tech in project.tech"
              :key="tech"
              color="red"
              text-color="white"
              >{{ tech }}</v-chip
            >
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-if="project.repo"
              flat
              large
              dark
              color="red"
              :href="project.repo"
              target="_blank"
            >
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn
              v-if="project.link"
              large
              flat
              dark
              color="red"
              :href="project.link"
              target="_blank"
            >
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-flex class="hidden-lg-and-up" row justify-center align-center wrap>
      <v-btn flat block color="red" to="/resume">Check out My Resume</v-btn>
      <v-btn flat block color="red" to="/portfolio"
        >Check out My Projects</v-btn
      >
      <v-btn flat block color="red" to="/contact">Contact Me</v-btn>
      <v-btn flat block color="red" to="/">Go Back to Main</v-btn>
    </v-flex>
    <div class="hidden-md-and-down d-flex justify-center">
      <v-btn flat color="red" to="/resume">Check out My Resume</v-btn>
      <v-btn flat color="red" to="/portfolio">Check out My Projects</v-btn>
      <v-btn flat color="red" to="/contact">Contact Me</v-btn>
      <v-btn flat color="red" to="/">Go Back to Main</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "%s ← Salman's Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "utf-8" },
      { property: "og:title", content: "Salman' Space" },
      { property: "og:site_name", content: "Salman' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://salmansharif.me" }
    ]
  },
  computed: {
    projects() {
      return this.$store.state.resume.projects;
    }
  },
  data() {
    return {
      dialog: false,
      projects1: [
        {
          title: "Euphoric Voyage",
          git: "https://github.com/EldinZaimovic/euphoric-voyage",
          demo: "https://www.euphoric-voyage.com/",
          tech: ["Gatsby", "JavaScript", "SCSS", "Markdown", "your mom"],
          poster: "https://i.imgur.com/9Ww2bvm.png"
        },
        {
          dialog: false,
          title: "This Site",
          git: "https://github.com/EldinZaimovic/Eldin-Space-Vue",
          demo: "https://eldin.space/",
          tech: ["VUE", "Storyblok", "HTML", "JavaScript"],
          poster: "https://i.imgur.com/sGUofpv.png"
        },
        {
          dialog: false,
          title: "Frontend Developer at Brandly.com",
          git:
            "https://cdn.neow.in/news/images/uploaded/2018/11/1543476286_cybersecurity.jpg",
          demo: "https://www.brandly.com/",
          tech: ["VUE", "SCSS", "HTML", "JavaScript"],
          poster: "https://i.imgur.com/nVqtTAf.png"
        },
        {
          dialog: false,
          title: "Digital Madness Test",
          git: "https://github.com/EldinZaimovic/Digital-Madness-test",
          demo: "https://digital-madness-test.netlify.com/",
          tech: ["VUE", "CSS", "HTML", "JavaScript"],
          poster: "https://i.imgur.com/GOIIL06.png"
        },
        {
          dialog: false,
          title: "Snowball Coding Challenge",
          git: "https://github.com/EldinZaimovic/SnowBall-Project",
          demo: "https://snowball-test.netlify.com/",
          tech: ["VUE", "GraphQL", "Axios", "JavaScript"],
          poster: "https://i.imgur.com/rXHBs36.png"
        },
        {
          dialog: false,
          title: "IBM Coding Challenge - Films Location",
          git: "https://github.com/EldinZaimovic/Film-Location-List",
          demo: "https://film-location-ibm-cc.netlify.com/",
          tech: ["VUE", "Lodash", "HTML", "JavaScript"],
          poster: "https://i.imgur.com/kCN1CFH.png"
        },
        {
          dialog: false,
          title: "Stock Trader",
          git: "https://github.com/EldinZaimovic/Stock-Trader",
          demo: "https://stock-trader-eldin.netlify.com/",
          tech: ["VUE", "Vuex", "Firebase", "JavaScript"],
          poster: "https://i.imgur.com/wK5dqP7.png"
        },
        {
          dialog: false,
          title: "Riders Share Newsleter",
          git: "",
          demo: "https://imgur.com/zTMJhGk",
          tech: ["HTML", "CSS", "MailChimp", "JavaScript"],
          poster: "https://i.imgur.com/zTMJhGk.jpg"
        },
        {
          dialog: false,
          title: "My Old Web Portfolio",
          git: "https://github.com/EldinZaimovic/EldinZaimovic.github.io",
          demo: "https://eldinzaimovic.github.io/index.html",
          tech: ["HTML", "CSS", "JavaScript", "jQuery"],
          poster: "https://i.imgur.com/AW7CXD5.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
