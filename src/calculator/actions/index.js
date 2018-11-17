export const submitAction = value => {
  return ({
    type: value, // value of the button clicked
    value // value of the button clicked
  })
};

//save the data on localStorage
export const setLocalStorageData = (key, val) => {
  localStorage.setItem(key, val);
}

// get the saved data from localStorage
export const getLocalStorageData = key => {
  return localStorage.getItem(key) || 0;
}

export const removeLocalStorage = key => {
  localStorage.removeItem(key)
}

// default application state data
export let defaulState = {
  currentVal: getLocalStorageData('currentVal'), // display value on calculator
  memoryVal: getLocalStorageData('memoryVal'), // memery value to mange the memory functions like M+, M- ..etc
  error: null // show error to end user if any
}

// Screen Buttons
export const btnLists = [
'9', '8', '7', '6','5',
'4', '3', '2','1', '0',
'/', '*','%', '-', '+',
'=', 'MS', 'MR', 'M-','M+',
'MC', 'CL'
]

// export const btnLists = [
// '9', '8', '7', 'CL',
// '6', '5', '4', '+',
// '3', '2', '1', '-',
// '0', '/', '*', '+',
// 'MS', 'MC', 'MR', '=',
// 'M+','M-'
// ]
