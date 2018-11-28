import React, { Component } from "react";

class DataEntryComponent extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      
      isClickedBtnA: false,
      isClickedBtnB: false,
      isClickedBtnC: false,
      
      isClickedRadioA:false,
      isClickedRadioB:false,
      isClickedRadioC:false,
      
      userValue : '',
      transferAmount : '',
      paymentMode: ''
    };
    
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleModeClick = this.handleModeClick.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
  }
  
  handleUserClick(value) {
    // dispatch action to update value
    
    this.setState({
      userValue: value
    });
    
    if(value === 'USER-A') {
     this.setState({
       isClickedBtnA: true,
       isClickedBtnB: false,
       isClickedBtnC: false
     })
    } else if(value === 'USER-B') {
      this.setState({
        isClickedBtnA: false,
        isClickedBtnB: true,
        isClickedBtnC: false
      })
    } else if(value === 'USER-C') {
      this.setState({
        isClickedBtnA: false,
        isClickedBtnB: false,
        isClickedBtnC: true
      })
    }
  }
  
  handleModeClick(value) {
  
    this.setState({
      paymentMode: value
    });
    
    if(value === 'American Express') {
      this.setState({
        isClickedRadioA:true,
        isClickedRadioB:false,
        isClickedRadioC:false
      })
    } else if(value === 'VISA') {
      this.setState({
        isClickedRadioA:false,
        isClickedRadioB:true,
        isClickedRadioC:false
      })
    } else if(value === 'DBS PayLa') {
      this.setState({
        isClickedRadioA:false,
        isClickedRadioB:false,
        isClickedRadioC:true
      })
    }
  }
  
  handleTransfer() {
    const {userValue, paymentMode, transferAmount } = this.state;
    if(userValue === ''){
      alert('Please select a user.');
    } else if(paymentMode === ''){
      alert('Please select a payment mode');
    } else if (transferAmount === '') {
      alert('Please enter a transfer amount');
    } else {
      // dispatch submit
      let transactionId = this.props.transactionId;
      this.props.submitTransfer({
        transactionId,
        userValue,
        paymentMode,
        transferAmount : parseFloat(transferAmount)
      });
    }
    
  }
  
  render() {
    const {isClickedBtnA,isClickedBtnB,isClickedBtnC, isClickedRadioA, isClickedRadioB, isClickedRadioC } = this.state;
    return (
      <div className="data-entry-wrapper container">
        <div className = "col-md-3"></div>
        <div className = "col-md-2 button-panel">
          <div className="row button-wrapper">
            <button className={isClickedBtnA? "btn btn-primary":"btn btn-light"} onClick={() => {
              this.handleUserClick('USER-A');
            }}>USER-A</button>
          </div>
          <div className="row button-wrapper">
            <button className={isClickedBtnB? "btn btn-primary":"btn btn-light"} onClick={() => {
              this.handleUserClick('USER-B');
            }}>USER-B</button>
          </div>
          <div className="row button-wrapper">
            <button className={isClickedBtnC? "btn btn-primary":"btn btn-light"} onClick={() => {
              this.handleUserClick('USER-C');
            }}>USER-C</button>
          </div>
        </div>
  
        <div className = "col-md-2">
          <div className="row button-wrapper">
            <table>
              <tbody>
                <tr>
                  <td><input type="radio" name="American Express"
                             checked={isClickedRadioA}
                             onChange={()=>{this.handleModeClick('American Express')}} />American Express</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div className="row button-wrapper">
            <table>
              <tbody>
              <tr>
                <td><input type="radio" name="VISA"
                           checked={isClickedRadioB}
                           onChange={()=>{this.handleModeClick('VISA')}} />VISA</td>
              </tr>
              </tbody>
            </table>
          </div>
  
          <div className="row button-wrapper">
            <table>
              <tbody>
              <tr>
                <td><input type="radio" name="DBS PayLa"
                           checked={isClickedRadioC}
                           onChange={()=>{this.handleModeClick('DBS PayLa')}} />DBS PayLa</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div className = "col-md-3">
          <div className="col-md-6 button-wrapper">
            <input type="number" className="form-control" value={this.state.transferAmount} onChange={(e) => {this.setState({transferAmount: e.target.value})}}/>
          </div>
          <div className="col-md-6 button-wrapper">
            <button className="btn btn-danger" onClick={() => {this.handleTransfer()}}>Transfer</button>
          </div>
        </div>
  
        <div className = "col-md-2"></div>
      </div>
    );
  }
}

export default DataEntryComponent;