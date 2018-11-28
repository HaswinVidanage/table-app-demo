import {SUBMIT_TRANSFER, SETUP_INIT_DATA} from  '../_actions/transfers.action';

export const INITIAL_STATE = {
  tableData: [],
  transactionId: 1000,
  totalAmexValue: 0,
  totalVisaValue: 0,
  totalDBSValue: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log('HDV action.type', state.tableData);
  switch (action.type) {
    case SUBMIT_TRANSFER :{
      if(action.payload.paymentMode === "American Express") {
        return {
          ...state,
          transactionId: state.transactionId + 1,
          tableData: [...state.tableData, action.payload],
          totalAmexValue: state.totalAmexValue + action.payload.transferAmount
        };
      } else if (action.payload.paymentMode === "VISA") {
        return {
          ...state,
          transactionId: state.transactionId + 1,
          tableData: [...state.tableData, action.payload],
          totalVisaValue: state.totalVisaValue + action.payload.transferAmount
        };
      } else if (action.payload.paymentMode === "DBS PayLa") {
        return {
          ...state,
          transactionId: state.transactionId + 1,
          tableData: [...state.tableData, action.payload],
          totalDBSValue: state.totalDBSValue + action.payload.transferAmount
        };
      } else {
        return state
      }
      
    }
    case SETUP_INIT_DATA :
      return {
        ...state,
        transactionId: action.payload.transactionId,
        tableData: action.payload.AssumedData,
        totalAmexValue: action.payload.totalAmexValue,
        totalVisaValue: action.payload.totalVisaValue,
        totalDBSValue: action.payload.totalDBSValue
      };
    default:
      return state
  }
}