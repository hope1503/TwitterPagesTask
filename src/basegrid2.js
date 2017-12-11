import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const style= {
  width:'50%',
  backgroundColor:'powderblue',
  margin: '15px',
};

function PaperSheetseed() {
  return (
    <div style={style}>
    <br />
      <Paper style={{paddingTop:'15px', width:'95%',paddingBottom:'15px',paddingLeft:'10px',marginLeft:'385px',
                    marginTop:'-780px',backgroundColor:'powderblue'}}>
          <Avatar src="./profileicon.jpg" style={{marginLeft:'25px'}}/>
        <Paper style={{marginLeft:'75px',width:'85%',height:'90%', paddingTop:'15px',marginTop:'-40px'}}>
          <Typography type="title" align="left" style={{fontSize:'12px',paddingLeft:'10px',paddingBottom:'10px'}}>
            <b>What's happening?</b>
          </Typography>
        </Paper>
      </Paper>
      <br />

    </div>

 );
}

export default PaperSheetseed;
