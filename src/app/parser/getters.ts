import { IParserState } from './state';

export interface IParserGetters {
  incrementPending(state: IParserState): boolean;
  decrementPending(state: IParserState): boolean;
  count(state: IParserState): number;
}

export const ParserGetters: IParserGetters = {
  incrementPending(state: IParserState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IParserState): boolean {
    return state.decrementPending;
  },
  count(state: IParserState): number {
    return state.count;
  },
};
