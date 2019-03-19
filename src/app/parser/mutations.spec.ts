import { ParserMutations } from './mutations';
import { ParserDefaultState, IParserState } from './state';

describe('ParserMutations', () => {
  let testState: IParserState;

  beforeEach(() => {
    testState = ParserDefaultState();
  });

  test('it should set the count', () => {
    ParserMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    ParserMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    ParserMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });
});
