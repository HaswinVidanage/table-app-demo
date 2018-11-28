import React, { Component } from "react";
import DataEntryComponent from './DataEntryComponent';
import TableComponent from './TableComponent';
import ChartComponent from './ChartComponent';

class HomePageComponent extends Component {
  
  componentWillMount() {
    const AssumedData = [
      {transactionId: 1000, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1001, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1002, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1003, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1004, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1005, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1006, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50},
      {transactionId: 1007, userValue: "USER-A", paymentMode: "DBS PayLa", transferAmount: 50}
    ];
    const transactionId= 1008;
    const totalAmexValue= 0;
    const totalVisaValue= 0;
    const totalDBSValue= 400;
    this.props.setupInitialData({
      AssumedData,
      transactionId,
      totalAmexValue,
      totalVisaValue,
      totalDBSValue
    });
    
  }
  render() {
    console.log('HDV props', this.props);
    return (
      
      <div className="home-page-wrapper">
        <DataEntryComponent submitTransfer={this.props.submitTransfer} transactionId={this.props.transactionId}/>
        <TableComponent transferData={this.props.transferData}/>
        <ChartComponent transferSubmitData={this.props.transferSubmitData}/>
      </div>
    );
  }
}

export default HomePageComponent;