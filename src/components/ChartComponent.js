import React, { Component } from "react";
import ReactSvgPieChart from "react-svg-piechart";

const data = [
  {title: "Amex", value: 100, color: "#590401"},
  {title: "Visa", value: 60, color: "#2f7d6d"},
  {title: "DBS PayLa", value: 60, color: "#c9cb33"},
]

class DataEntryComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      totalAmexValue:0,
      totalVisaValue:0,
      totalDBSValue:0
    };
  }
 
  
  render() {
    
    const {totalAmexValue,totalVisaValue, totalDBSValue }  = this.props.transferSubmitData;
    const AmexData  = {title: `American Express : ${totalAmexValue}`, value: totalAmexValue, color: "#590401"};
    const VisaData  = {title: `Visa : ${totalVisaValue}`, value: totalVisaValue, color: "#2f7d6d"};
    const DBSData  = {title: `DBS PayLa : ${totalDBSValue}`, value: totalDBSValue, color: "#c9cb33"};
    
    return (
    <div className="chart-wrapper">
      <div className="col-md-5"></div>
      <div className="col-md-2">
        <div className="chart-component">
          <ReactSvgPieChart
        data={[
          AmexData,VisaData,DBSData
        ]}
        expandOnHover
        onSectorHover={(d, i, e) => {
          if (d) {
            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
          } else {
            console.log("Mouse leave - Index:", i, "Event:", e)
          }
        }}
          />
        </div>
      </div>
      <div className="col-md-5"></div>
    </div>
    );
  }
}

export default DataEntryComponent;