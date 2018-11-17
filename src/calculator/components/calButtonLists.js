import React from 'react';
import PropTypes from 'prop-types';

const CalButtonLists = ({ btnLists, submitHandler, memoryVal }) => {
  return (
    <div className="btnSection">
      {btnLists.map((btnVal, indx) => {
        if(['MR', 'M-', 'M+'].indexOf(btnVal) != -1){
          return (
            <button disabled={memoryVal <= 0} className="btn btn-secondary btnCal" key={indx} onClick={submitHandler.bind(this, btnVal)}>{btnVal}</button>
          )
        }

        return (
          <button className="btn btn-secondary btnCal" key={indx} onClick={submitHandler.bind(this, btnVal)}>{btnVal}</button>
        )

        })
      }
    </div>
  )
}

// Prevent the typing mistakes
CalButtonLists.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  btnLists: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  memoryVal: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default CalButtonLists;
