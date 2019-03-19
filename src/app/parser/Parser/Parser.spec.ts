import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { ActionTree, GetterTree, Store } from 'vuex';
import Parser from './Parser.vue';
import { ParserGetters, IParserGetters } from '../getters';
import { ParserDefaultState, IParserState } from '../state';
import { ParserActions, IParserActions } from '../actions';
import { i18n } from '@/app/shared/plugins/i18n/i18n';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Parser.vue', () => {
  let store: Store<IParserState>;
  let getters: GetterTree<IParserState, IParserGetters>;
  let actions: ActionTree<IParserState, IParserActions>;
  let state: IParserState;

  beforeEach(() => {
    getters = {
      ...ParserGetters,
    };
    actions = {
      ...ParserActions,
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    state = {
      ...ParserDefaultState(),
    };

    store = new Vuex.Store({
      modules: {
        parser: {
          namespaced: true,
          getters,
          actions,
          state,
        },
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Parser, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Parser');
  });

  test('should increment and decrement', () => {
    const wrapper: any = mount<any>(Parser, {
      store,
      localVue,
      i18n,
    });

    wrapper.vm.increment();
    expect(actions.increment).toHaveBeenCalled();

    wrapper.vm.decrement();
    expect(actions.decrement).toHaveBeenCalled();
  });

  test('dispatches action on the server', () => {
    store.dispatch = jest.fn();

    Parser.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`parser/increment`);
  });
});
