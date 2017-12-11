import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class TabsLargeList extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Top" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Latest" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}} />
          <Tab label="People" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Photos" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Videos" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}} />
          <Tab label="News" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Broadcasts" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
        </Tabs>
      </Paper>
    );
  }
}

export default TabsLargeList;
