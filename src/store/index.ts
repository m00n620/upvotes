import Vue from "vue";
import { createStore } from "vuex";

type IUpvotes = {
  id: number;
  selected: boolean;
  count: number;
};

type IState = {
  upvotesList: IUpvotes[];
};

const store = createStore<IState>({
  state() {
    return {
      upvotesList: [
        { id: 1, selected: false, count: 0 },
        { id: 2, selected: false, count: 0 },
        { id: 3, selected: false, count: 0 },
      ],
    };
  },
  mutations: {
    add(state, { id }) {
      const upvotes = state.upvotesList.find((u) => u.id === id);
      if (upvotes) {
        upvotes.count++;
      }
    },
    toggle(state, { id }) {
      const upvotes = state.upvotesList.find((u) => u.id === id);
      if (upvotes) {
        upvotes.selected = !upvotes.selected;
      }
    },
  },
  actions: {
    add({ commit }, payload) {
      commit("add", payload);
    },
    toggle({ commit }, payload) {
      commit("toggle", payload);
    },
  },
});

export default store;
