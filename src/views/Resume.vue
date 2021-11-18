<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            color="red"
            small
            v-for="exp in experience"
            :key="exp"
          >
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">
                  {{ exp.start }}
                </div>
                <div class="caption font-weight-bold red--text">
                  {{ exp.end }}
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>{{ exp.position }}</strong>
                <div class="caption mb-2">{{ exp.company }}</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            color="red"
            small
            v-for="edu in education"
            :key="edu"
          >
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">
                  {{ edu.start }} -
                </div>
                <div class="caption font-weight-bold red--text">
                  {{ edu.end }}
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>{{ edu.degree }}</strong>
                <div class="caption mb-2">{{ edu.school }}</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg10 class="mx-2 pt-4">
      <v-div class="d-flex flex-row justify-space-between align-center">
        <h2>
          <span>Industry </span>
          <span class="red--text">Skills</span>
        </h2>
        <v-spacer v-for="x in 100" :key="x" class="flex-grow-1" />
        <v-btn @click="showMore" class="flex-shrink-1" flat>
          <div v-if="!show">Show More</div>
          <div v-else>Show Less</div>
        </v-btn>
      </v-div>
      <v-progress-circular
        v-for="skill in skills"
        :key="skill"
        :value="fillBuffer(skill.level)"
        color="red"
        size="140"
        width="10"
        class="ma-2"
      >
        <v-hover v-slot="{ hover }">
          <v-avatar size="100" v-if="skill.img">
            <v-img :src="skill.img" :alt="skill.name" contain>
              <v-fade-transition v-if="hover">
                <div
                  class="d-flex black justify-center align-center white--text"
                  style="height: 100%; opacity:70%"
                >
                  {{ skill.name }}
                </div>
              </v-fade-transition>
            </v-img>
          </v-avatar>
          <strong v-else> {{ skill.name }} </strong>
        </v-hover>
      </v-progress-circular>
    </v-flex>
    <v-flex xs12 sm12 md4 lg5 xl6 class="mt-4 pa-2">
      <v-btn
        :href="resumeLink"
        target="_blank"
        color="red"
        dark
        large
        block
      >
        Download Resume
        <v-icon right dark>fas fa-file-download</v-icon>
      </v-btn>
    </v-flex>
    <v-flex class="hidden-lg-and-up">
        <v-btn flat block color="red" to="/resume">Check out My Resume</v-btn>
        <v-btn flat block color="red" to="/portfolio">Check out My Projects</v-btn>
        <v-btn flat block color="red" to="/contact">Contact Me</v-btn>
    <v-btn flat block color="red" to="/">Go Back to Main</v-btn>
    </v-flex>
    <div class="hidden-md-and-down d-flex justify-center">
        <v-btn flat color="red" to="/resume">Check out My Resume</v-btn>
        <v-btn flat color="red" to="/portfolio">Check out My Projects</v-btn>
        <v-btn flat color="red" to="/contact">Contact Me</v-btn>
    <v-btn flat color="red" to="/">Go Back to Main</v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Salman's Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "utf-8" },
      { property: "og:title", content: "Salman's Portfolio" },
      { property: "og:site_name", content: "Salman's Portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://salmansharif.me" },
    ]
  },
  computed: {
    education() {
      return this.$store.state.resume.educations;
    },
    experience() {
      return this.$store.state.resume.workExp;
    },
    skills() {
      if (!this.show) return this.$store.state.resume.skills.slice(0,6);
      return this.$store.state.resume.skills;
    },
    resumeLink () { return this.$store.state.resume.resumeLink },
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      show: false
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.value = 90;
      }, 800);
    },
    showMore() {
      this.show = !this.show;
    },
    fillBuffer(level) {
      let res = 0
      switch (level) {
        case 1:
          res = 40
          break
        case 2:
          res = 60
          break
        case 3:
          res = 75
          break
        case 4:
          res = 80
          break
        case 5:
          res = 95
          break
      }
        return res
    }
  }
};
</script>
<style>
img {
  object-fit: scale-down;
}
</style>
