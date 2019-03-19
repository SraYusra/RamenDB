import { ParserGetters } from './getters';
import { ParserDefaultState, IParserState } from './state';

describe('ParserGetters', () => {
  let testState: IParserState;

  beforeEach(() => {
    testState = ParserDefaultState();
  });

  test('it should get the count', () => {
    expect(ParserGetters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(ParserGetters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(ParserGetters.decrementPending(testState)).toBe(false);
  });
});
