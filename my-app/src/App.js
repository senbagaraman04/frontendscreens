import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/NavBar';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div>
       <AppBar color="primary" position="static">
         <Toolbar>
             <TypoGraphy variant="subtitle1" color="inherit">
                 My Header
             </TypoGraphy>
             <NavBar/>
         </Toolbar>
        
        </AppBar>
        <Posts/>
      </div>
    )
  }
}
export default App