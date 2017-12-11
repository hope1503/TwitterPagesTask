import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class TabsCheck extends React.Component {
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
          <Tab label="Home" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Notifications" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
          <Tab label="Messages" style={{fontWeight:'bold',fontSize:'20px',textTransform:'capitalize'}}/>
        </Tabs>
        <Chip label="aadhaar"
          style={{marginLeft:'850px',marginTop:'-35px',width:'20%',padding:'5px',justifyContent: 'left',fontSize:'14px',}} />
        <Avatar src="./profileicon.jpg" style={{marginLeft:'1160px',marginTop:'-40px'}}/>
        <Chip label="Tweet"
          style={{fontWeight:'bold',backgroundColor:'dodgerblue',color:'white',paddingRight:'5px',
          marginLeft:'1225px',marginTop:'-35px'}} />
          <br />
     </Paper>
    );
  }
}

export default TabsCheck;
