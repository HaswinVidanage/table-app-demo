export const SUBMIT_TRANSFER = 'SUBMIT_TRANSFER';

export function submitTransfer(payload) {
  const {userValue, paymentMode, transferAmount } = payload;
  return {type: SUBMIT_TRANSFER, payload};
}


export const SETUP_INIT_DATA = 'SETUP_INIT_DATA';

export function setupInitialData(payload) {
  return {type: SETUP_INIT_DATA, payload};
}