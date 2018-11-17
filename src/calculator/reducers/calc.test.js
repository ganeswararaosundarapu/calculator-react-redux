
import calReducer from './calc';

describe('Calculator Reducer >>> ', () => {
  it('should return the intial state', () => {
    expect(calReducer(undefined, {})).toEqual(
    {
      "currentVal": "",
      "error": "",
      "memoryVal": 0
    }
    );
  });

  it('should return state with 9 as currentVal if the user activated on 9', () => {
    expect(calReducer(undefined, {type: '9', value: '9'})).toEqual(
    {
      "currentVal": '9',
      "error": "",
      "memoryVal": 0
    }
    );
  });

})
