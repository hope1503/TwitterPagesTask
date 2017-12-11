import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const style = {
  width: '100%',
  maxWidth: 350,
  paddingLeft: '15px',
  paddingTop: '5px',
  margin: '15px',
};

function PaperSheetGrid() {
  return (
    <div style={style}>
      <Paper style={{paddingLeft:'15px'}}>
        <br />
        <Typography type="title" gutterBottom align="left">
          <b>Trends for you</b>
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#ArmedForcesFlagDay</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          23.7k Tweets
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#Gujarat4Modi</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          10.8k Tweets
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#RichieFromToday</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          1,094 Tweets
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#AadvikAjith</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          1,490 Tweets
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#Race3</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          4,088 Tweets
        </Typography>
        <br />
        <Typography type="Subheading" gutterBottom align="left">
          <div style={{color:'blue'}}>
          <b>#Thadam</b>
          </div>
        </Typography>
        <Typography type="body1" gutterBottom align="left">
          12.1k Tweets
        </Typography>
        <br />
     </Paper>
    </div>
  );
}

export default PaperSheetGrid;
