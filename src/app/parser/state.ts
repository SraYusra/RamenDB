export interface IParserState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const ParserDefaultState = (): IParserState => {
  return {
    incrementPending: false,
    decrementPending: false,
    count: 0,
  };
};
