import { IParserState } from './state';

export interface IParserMutations {
  SET_INCREMENT_PENDING(state: IParserState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IParserState, pending: boolean): void;

  SET_COUNT(state: IParserState, count: number): void;
}

export const ParserMutations: IParserMutations = {
  SET_INCREMENT_PENDING: (state: IParserState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IParserState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT: (state: IParserState, count: number) => {
    state.count = count;
  },
};
