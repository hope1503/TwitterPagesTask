import React from 'react';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

function FlatButtons() {
  return (
   <div style={{backgroundColor:'white'}}>
     <table>
     <tr>
      <td><Button style={{fontSize:'18px',textTransform:'capitalize'}}><b>Home</b></Button></td>
      <td><Button style={{fontSize:'18px',textTransform:'capitalize'}}><b>Notifications</b></Button></td>
      <td style={{width:'47%'}}><Button style={{fontSize:'18px',textTransform:'capitalize'}}><b>Messages</b></Button></td>

      <td style={{width:'25%'}}><Chip label="Search Twitter" style={{marginLeft:'-20px',width:'100%',justifyContent: 'left',fontSize:'14px'}} /></td>
      <td><Avatar src="./profileicon.jpg" style={{marginLeft:'5px'}}/></td>
      <td><Chip label="Tweet" style={{fontWeight:'bold',backgroundColor:'dodgerblue',color:'white',paddingRight:'5px',marginLeft:'20px'}} /></td>
    </tr>
    </table>
     <hr />
     </div>
 );
}

export default FlatButtons;
