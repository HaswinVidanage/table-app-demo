import { connect } from 'react-redux';
import HomePageComponent from './HomePageComponent';

import {
  submitTransfer,
  setupInitialData
} from '../_actions/transfers.action';

function mapStateToProps (state, props) {
  return {
    transferData: state['transferReducer'].tableData,
    transactionId: state['transferReducer'].transactionId,
    transferSubmitData : state['transferReducer']
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitTransfer: payload => {
      dispatch(submitTransfer(payload));
    },
    setupInitialData: payload => {
      dispatch(setupInitialData(payload));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);