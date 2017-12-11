import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButtons from './buttontoolbar.js';
import PaperSheet from './basegrid.js';
import PaperSheetGrid from './basegrid1.js';
import PaperSheetseed from './basegrid2.js';
import PaperSheetShow from './basegrid3.js';
import PaperSheetSingle from './basegrid4.js';

const App = () => (
  <MuiThemeProvider>
    <FlatButtons />
    <PaperSheet />
    <PaperSheetGrid />
    <PaperSheetseed />
    <PaperSheetShow />
    <PaperSheetSingle />
  </MuiThemeProvider>
);
export default App;
