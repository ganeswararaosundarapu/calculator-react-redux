import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import { submitAction } from '../actions';


const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProp callback called");
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapDispatchToProps callback called");
  return {
    submitHandler: value => dispatch(submitAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
