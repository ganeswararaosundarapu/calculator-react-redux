import { submitAction } from './index';

describe('Calculator Action >>> ', () => {
  it('Should return the action payload with 7', () => {
    expect(submitAction('7')).toEqual(
      {
        type: '7',
        value: '7'
      }
    )
  });

  it('Should return the action payload not matching with 7', () => {

    expect(submitAction('7')).toEqual(expect.not.objectContaining(
      {
        type: '6',
        value: '6'
      }
    ))
  });


})
