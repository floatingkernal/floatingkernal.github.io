<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mt-2">
          <span>GetIn</span>
          <span class="red--text">Touch</span>
        </h2>
        <div v-for="contact in contacts" :key="contact" class="py-4 subheading font-weight-bold">
          <a :href="contact.href">
          <v-icon large color="red" left>{{contact.icon}}</v-icon>
          <span>{{contact.value}}&nbsp;</span>
          </a>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mb-4">
          <span>Contact</span>
          <span class="red--text">Form</span>
        </h2>

        <form method="POST" action="https://formspree.io/f/mqkwvoqw">
          <v-text-field
            name="name"
            color="red"
            background-color="transparent"
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            type="email"
            color="red"
            background-color="transparent"
            name="email"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            color="red"
            background-color="transparent"
            :counter="200"
            :error-messages="bodyErrors"
            v-model="body"
            label="Textarea"
            name="body"
            @blur="$v.body.$touch()"
          ></v-textarea>
          <v-btn
            @click="submit"
            type="submit"
            color="red"
            class="white--text"
            :disabled=" (body.length<=20)"
          >SEND MESSAGE</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
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
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  maxLength,
  email,
  minLength
} from 'vuelidate/lib/validators'
export default {
  metaInfo: {
    title: 'Contact',
    titleTemplate: "%s ← Salman's Portfolio",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Salman's Portfolio" },
      { property: 'og:site_name', content: "Salman's Portfolio" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://salmansharif.me' }
    ]
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  data () {
    return {
      name: '',
      email: '',
      body: ''
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.body = ''
    }
  },
  computed: {
    contacts() {
      return this.$store.state.resume.contacts
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 20 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    bodyErrors () {
      const errors = []
      if (!this.$v.body.$dirty) return errors
      !this.$v.body.minLength &&
        errors.push('Text must be at least 20 characters long')
      !this.$v.body.required && errors.push('Text is required')
      return errors
    }
  }
}
</script>

<style lang="css" scoped>
a:link {
    text-decoration: inherit;
    color: inherit;
}

a:visited {
    text-decoration: inherit;
    color: inherit;
}
</style>
