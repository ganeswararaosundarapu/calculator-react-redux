import configureMockStore from 'redux-mock-store';
import { submitAction } from './actions';

const mockStore = configureMockStore();

describe('Integration Testing for Calculator >>> ', () => {
    let store = null;

    beforeEach(() => {
      store = mockStore({});
      store.dispatch(submitAction(77))
    });

    it("Should match with store data", () => {

          const expectedActions = [
              { type: 77, value: 77},
              { type: 100, value: 100}
            ];
          store.dispatch(submitAction(100));
          expect(store.getActions()).toEqual(expectedActions)
    });

    it("Should not match with store data", () => {
          const expectedActions = [
              { type: 100, value: 100}
            ];
          store.dispatch(submitAction(200));
          expect(store.getActions()).toEqual(expect.not.objectContaining(expectedActions));
    });



});
