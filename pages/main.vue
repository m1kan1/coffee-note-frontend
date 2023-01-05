<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
            <v-form @submit.prevent="addNote">
              <v-textarea
                solo
                label="memo"
                v-model="memo"
              ></v-textarea>
              <v-rating
                background-color="yellow lighten-3"
                color="yellow"
                large
                v-model="star"
              ></v-rating>
              <v-btn type="submit" color="primary">追加</v-btn>
            </v-form>
        </v-row>
      <v-container>
        <note-list/>
      </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NoteList from '@/components/NoteList'
import { mapActions } from 'vuex';
export default {
  components: {
    NoteList,
  },
  data() {
    return {
      memo: '',
      star: 0,
    }
  },
  mounted(){
    this.$store.dispatch('fetchNote')
  },
  methods: {
    async addNote() {
      const note = {
        memo: this.memo,
        star: this.star,
      }
      // Vuexを使用して、メモを追加する
      await this.$store.dispatch('addNote', note)

      // 入力内容をクリアする
      this.memo = ''
      this.star = 0

      },      
  },
}
</script>
