import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';

const style = {
  width: '100%',
  maxWidth: 350,
  paddingLeft: '15px',
  paddingTop: '5px',
  margin: '15px',
};

function PaperSheet() {
  return (
    <div style={style}>
      <Paper>
        <Typography type="display2" style={{backgroundColor:'dodgerblue',color:'dodgerblue'}}>
        <br />
        -----
        <br />
        </Typography>
        <Typography type="title" gutterBottom align="center">
          <Avatar style={{marginTop:'-25px', marginLeft:'60px',color: '#fff',backgroundColor: deepOrange[500]}}>H</Avatar>
          <b>Hemavathy</b>
        </Typography>
        <Typography type="caption" gutterBottom align="center">
          @Hemavat1503
        </Typography>
        <br />
        <Typography type="body1" gutterBottom align="left">
           <table>
            <tr>
              <td style={{width:'40%',paddingLeft:'15px'}}><b>Tweets</b></td>
              <td style={{width:'38%'}}><b>Following</b></td>
              <td><b>Followers</b></td>
            </tr>
           </table>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
           <table>
            <tr>
              <td style={{width:'50%',color:'blue', paddingLeft:'15px'}}><b>15</b></td>
              <td style={{width:'43%',color:'blue'}}><b>55</b></td>
              <td style={{color:'blue'}}><b>10</b></td>
            </tr>
           </table>
        </Typography>
        <br />
      </Paper>
    </div>
  );
}

export default PaperSheet;
