import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalButtonLists from './calButtonLists';
import Hint from './Hint';

class Calcualtor extends Component{
  render(){
    console.log("Calculator Render callback called");
    const { submitHandler, currentVal, memoryVal, error, btnLists } = this.props;
    return (
      <div class="container">
        <div className="calContainer">
          <h2 className="text-center"> Calculator </h2>
          <div>
             <div className="form-group">
               <input type="text" className="form-control calInput" readOnly value={currentVal} />
            </div>
          </div>
          <CalButtonLists btnLists={btnLists} submitHandler={submitHandler} memoryVal={memoryVal||0} />

          {error &&   <div className="text-center"> Error: {error} </div>}

          {parseInt((memoryVal||0)) > 0 && <div className="text-center"> Memory Value: {memoryVal} </div>}
        </div>
      </div>
    )
  }
}

// Prevent the typing mistakes
Calcualtor.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  currentVal: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  memoryVal: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  error: PropTypes.string.isRequired
}

export default Calcualtor;

  // <input type="text" ref={this.inputMyRef} />
  // <button onClick={() => submitHandler.bind(this, this.inputMyRef.current.value)()}></button>
