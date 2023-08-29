import Vue from 'vue';
import Vuex from 'vuex';
import LooLoc from './LooLoc.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    LooLoc,
  },
});
