// store/index.js
import Vuex from "vuex";

export const state = () => ({
  // アプリケーションの状態を定義
  notes: [],
});

export const mutations = {
  // 状態を変更する処理を定義
  addNote(state, note) {},
  removeNote(state, note) {},
  fetchNote(state, notes) {
    state.notes = notes;
  },
};

export const actions = {
  // 非同期処理を行う処理を定義
  async addNote({ commit }, note) {
    // テーブルにデータを登録する処理を行う
    const params = {
      memo: note.memo,
      date: Date.now(),
      star: Number(note.star),
    };
    const res = await this.$axios
      .post(process.env.COFFEE_NOTE_API, params)
      .catch((err) => {
        return error.response;
      });
    this.dispatch("fetchNote");
    // 登録が完了したら、ミューテーションをコミットする
    commit("addNote", note);
  },
  async removeNote({ commit }, note) {
    const params = {
      date: note.date,
    };
    const res = await this.$axios
      .delete(process.env.COFFEE_NOTE_API, { data: params })
      .catch((err) => {
        return error.response;
      });
    this.dispatch("fetchNote");

    commit("removeNote", note);
  },
  fetchNote({ commit }) {
    const params = this.$axios
      .get(process.env.COFFEE_NOTE_API)
      .then((response) => {
        if (response.data) {
          // formatDate関数で日付をフォーマットする
          const formattedNotes = response.data.map((note) => {
            let date = new Date(note.date);
            let formattedDate =
              date.getFullYear() +
              "年" +
              (date.getMonth() + 1) +
              "月" +
              date.getDate() +
              "日 " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds();
            return {
              ...note,
              formattedDate: formattedDate,
              memo: note.memo.replace(/\\n/g, "\n"),
            };
          });
          // フォーマットされたnotesをstateにセットする
          commit("fetchNote", formattedNotes);
        }
      });
  },
};

export default () =>
  new Vuex.Store({
    state,
    mutations,
    actions,
  });
