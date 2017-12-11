import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsCheck from './tabscomponent.js';
import PaperSearch from './papergrid.js';
import TabsLargeList from './papergrid1.js';
import PaperSearchSeed from './papergrid2.js';
import PaperSearchShow from './papergrid3.js';

const SearchApp = () => (
  <MuiThemeProvider>
    <TabsCheck />
    <PaperSearch />
    <TabsLargeList />
    <PaperSearchSeed />
    <PaperSearchShow />

  </MuiThemeProvider>
);
export default SearchApp;
