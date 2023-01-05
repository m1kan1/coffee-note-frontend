<template>
  <div>
    <v-row>
      <v-card v-for="note in notes" :key="note.id" class="ma-3">
        <v-card-text>{{ note.formattedDate }}</v-card-text>
        <v-card-text
        style="white-space:pre-wrap;"
        >{{ note.memo }}</v-card-text>
        <v-rating
          background-color="pink lighten-3"
          color="pink"
          length=5
          size=5
          v-model="note.star"
          large
          disabled=true
          readonly
        ></v-rating>
        <v-card-actions>
          <v-btn color="error" @click="removeNote(note)">削除</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "NoteList",
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  created() {
    },
  methods: {
    async removeNote(note) {
      // Vuexを使用して、メモを削除する
      await this.$store.dispatch("removeNote", note);
    }
  }
};
</script>
