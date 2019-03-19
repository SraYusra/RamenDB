import { Module } from 'vuex';
import { IState } from '@/app/state';
import { ParserDefaultState, IParserState } from './state';
import { ParserActions } from './actions';
import { ParserGetters } from './getters';
import { ParserMutations } from './mutations';

export const ParserModule: Module<IParserState, IState> = {
  namespaced: true,
  actions: {
    ...ParserActions,
  },
  getters: {
    ...ParserGetters,
  },
  state: {
    ...ParserDefaultState(),
  },
  mutations: {
    ...ParserMutations,
  },
};
