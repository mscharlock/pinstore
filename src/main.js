import React from 'react';
import ReactDom from 'react-dom';
//import App  here when it's created//
import {Provider} from 'react-redux';
//import Store when created// import makeStore from wherever
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


let store = makeStore();

class EntireApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          //Where app lives//
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDom.render(<EntireApp />, document.getElementById('root'));
