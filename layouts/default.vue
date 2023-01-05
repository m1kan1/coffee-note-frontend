<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      v-if="$auth.loggedIn"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <p>
        {{this.$auth.user.email}}
      </p>
      <v-btn icon @click="logout">
                <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Coffee Note'
    }
  },
  methods:{
    logout(){
      this.$auth.logout()
    }
  }
}
</script>
