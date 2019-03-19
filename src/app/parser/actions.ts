import { ActionContext } from 'vuex';
import { IParserState } from './state';
import { IState } from '../state';
import { HttpService } from '../shared/services/HttpService/HttpService';

export interface IParserResponse {
  count: number;
}

export interface IParserActions {
  increment(context: ActionContext<IParserState, IState>): Promise<any>;

  decrement(context: ActionContext<IParserState, IState>): Promise<any>;
}

export const ParserActions: IParserActions = {
  async increment({ commit, state }: ActionContext<IParserState, IState>) {
    commit('SET_INCREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IParserResponse>('/counter/increment', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    } catch (e) {
      commit('SET_INCREMENT_PENDING', false);
      throw new Error(e);
    }
  },
  async decrement({ commit, state }: ActionContext<IParserState, IState>) {
    commit('SET_DECREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IParserResponse>('/counter/decrement', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    } catch (e) {
      commit('SET_DECREMENT_PENDING', false);
      throw new Error(e);
    }
  },
};
