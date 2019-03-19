import { AppDefaultState, IAppState } from './app/state';
import { ICounterState } from './counter/state';
import { IParserState } from './parser/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  counter?: ICounterState;
  parser?: IParserState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
  },
};
