import { defaulState, setLocalStorageData, getLocalStorageData, removeLocalStorage } from '../actions';

const calcReducer = (state = defaulState, action) => {
  try{
    console.log("Calcualtor Reducer called with previous state and action ", state, action);
    let actionVal = action.value || '';
    switch(action.type){
        case '=': // evalute the display express
          let result = eval(state.currentVal);
          // save the result on the localStorage after the evalution of the expression
          setLocalStorageData('currentVal', result);
          return { ...state, currentVal: result, error: ''}
        case '%': // evalute the display express
          let resultPer = eval(state.currentVal)/100;
          // update the percent val
          setLocalStorageData('currentVal', resultPer);
          return { ...state, currentVal: resultPer, error: ''}
        case 'MS': //
            let msVal = state.currentVal;
            // Skip saving if the display val invalid
            if(!isNaN(msVal)){
              // save the memory Val
              setLocalStorageData('memoryVal', msVal);
              return { ...state, memoryVal: msVal, error: ''}
            }
            // return the previous state
            return state;
        case 'M-': //
            let mSubVal = eval(state.memoryVal);
            let cSubVal = eval(state.currentVal);
            // Skip saving if the saved vals invalid
            if(!isNaN(mSubVal) && !isNaN(cSubVal)){
              mSubVal -= cSubVal; // subtract with the display val
              mSubVal = eval(mSubVal);
              // save the memory Val
              setLocalStorageData('memoryVal', mSubVal);
              return { ...state, memoryVal: mSubVal, error: ''}
            }
            // return the previous state
            return state;
        case 'M+': //
            let mAddVal = eval(state.memoryVal);
            let cAddVal = eval(state.currentVal);
            // Skip saving if the saved vals invalid
            if(!isNaN(mAddVal) && !isNaN(cAddVal)){
              mAddVal += cAddVal; // Add with the display val
              // save the memory Val
              setLocalStorageData('memoryVal', mAddVal);
              return { ...state, memoryVal: mAddVal, error: ''}
            }
            // return the previous state
            return state;
        case 'MR': // Memory Recall
            // get the memoryVal from the localStorage
            let cRecallVal = state.currentVal;
            let mRecallVal = getLocalStorageData('memoryVal');
            // append the recall val end of the the display val like [2*]MR val
            let appendExp = eval(cRecallVal+''+mRecallVal);
            setLocalStorageData('currentVal', appendExp);
            return { ...state, currentVal: appendExp, error: ''}
        case 'MC': // clear the memory
          // removed the value from localStorage
          removeLocalStorage('memoryVal');
          return { ...state, memoryVal: '', error: ''}
        case 'CL': // clear the screen display
          // removed the value from localStorage
          removeLocalStorage('currentVal');
          return { ...state, currentVal: '', error: ''}
        default: // falls back button click for 0-9 and +, -, *, /
           let newVal = state.currentVal == "0" ? actionVal : (state.currentVal+actionVal);
            setLocalStorageData('currentVal', newVal);
          return { ...state, currentVal: newVal, error: ''}
    }
  }catch(e){
    console.log("Getting error while processing with the action >>", action, e);
    // return the error to acknowdge the end user
    return { ...state, error: e.message.toString()}
  }
}

export default calcReducer;
