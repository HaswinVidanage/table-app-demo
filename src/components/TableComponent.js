import React, { Component } from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataEntryComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          transactionId: 1,
          userValue: "USER-A",
          paymentMode: "American Express",
          transferAmount: "500",
        },
        {
          transactionId: 2,
          userValue: "USER-B",
          paymentMode: "VISA",
          transferAmount: "500",
        }
      ]
    };
  }
  render() {
    return (
      <div className="table-wrapper">
        <ReactTable
          data={this.props.transferData}
          columns={[
            {
              columns: [
                {
                  Header: "Transaction ID",
                  accessor: "transactionId"
                },
                {
                  Header: "User Name",
                  accessor: "userValue"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Payment Mode",
                  accessor: "paymentMode"
                },
                {
                  Header: "Amount",
                  accessor: "transferAmount"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default DataEntryComponent;