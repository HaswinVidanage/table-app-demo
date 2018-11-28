import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePageComponent from './components/HomePageComponentLink';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: '#fff' },
  },
});

class App extends Component {
  

  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <HomePageComponent/>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
