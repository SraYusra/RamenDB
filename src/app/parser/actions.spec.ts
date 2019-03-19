import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { ParserDefaultState, IParserState } from './state';
import { IState } from '@/app/state';
import { ParserActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('ParserActions', () => {
  let testContext: ActionContext<IParserState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: ParserDefaultState(),
    } as ActionContext<IParserState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('it should call INCREMENT action on success', async () => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios.onPut('/counter/increment').reply(200, { count: 1337 });

    await ParserActions.increment(testContext);

    expect(commitMock.mock.calls[0]).toEqual(['SET_INCREMENT_PENDING', true]);
    expect(commitMock.mock.calls[1]).toEqual(['SET_COUNT', 1337]);
    expect(commitMock.mock.calls[2]).toEqual(['SET_INCREMENT_PENDING', false]);
  });

  test('it should set INCREMENT pending to false on fail', async () => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios.onPut('/counter/increment').reply(500);

    try {
      await ParserActions.increment(testContext);
    } catch (e) {
      expect(commitMock.mock.calls[0]).toEqual(['SET_INCREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_INCREMENT_PENDING', false]);
    }
  });

  test('it should call DECREMENT action on success', async () => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios.onPut('/counter/decrement').reply(200, { count: 1337 });

    await ParserActions.decrement(testContext);

    expect(commitMock.mock.calls[0]).toEqual(['SET_DECREMENT_PENDING', true]);
    expect(commitMock.mock.calls[1]).toEqual(['SET_COUNT', 1337]);
    expect(commitMock.mock.calls[2]).toEqual(['SET_DECREMENT_PENDING', false]);
  });

  test('it should set DECREMENT pending to false on fail', async () => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios.onPut('/counter/decrement').reply(500);

    try {
      await ParserActions.decrement(testContext);
    } catch (e) {
      expect(commitMock.mock.calls[0]).toEqual(['SET_DECREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_DECREMENT_PENDING', false]);
    }
  });
});
