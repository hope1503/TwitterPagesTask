import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

function PaperSearchSeed() {
  return (
    <div>
    <Paper style={{marginTop:'20px', marginLeft:'60px',width:'25%'}}>
      <Typography type="title" align="left" style={{padding:'15px'}}>
        Search filters
      </Typography>
    </Paper>
    <Paper style={{marginTop:'15px',width:'24%',marginLeft:'60px',paddingLeft:'15px'}}>
      <Typography type="title" align="left" style={{paddingTop:'15px'}} >
        Related searches
      </Typography>
      <Typography type="body1" align="left" style={{paddingTop:'10px',color:'dodgerblue'}} >
        <b>kapilsibil</b>
      </Typography>
      <Typography type="body1" align="left" style={{paddingTop:'5px',color:'dodgerblue'}}>
        <b>bombay high court</b>
      </Typography>
      <Typography type="body2" align="left" style={{paddingTop:'5px',color:'dodgerblue'}}>
        <b>#aadhaar</b>
      </Typography>
      <Typography type="body2" align="left" style={{paddingTop:'5px',color:'dodgerblue'}}>
        <b>#chaupal</b>
      </Typography>
      <Typography type="body2" align="left" style={{paddingBottom:'15px',paddingTop:'5px',color:'dodgerblue'}}>
        <b>#nandos195</b>
      </Typography>
    </Paper>

    <Paper style={{width:'24%',marginTop:'15px',marginLeft:'60px',padding:'15px'}}>
      <Typography type="title" align="left">
        Who to follow
      </Typography>
      <br />
      <Typography type="body2" align="left" >
        <div style={{paddingLeft:'60px'}}>
        <b>Fevicol #AADHAAR</b>
        </div>
        <Avatar src="./FVL.jpg" style={{marginTop:'-20px'}} />
        <Chip label="Follow"
         style={{fontWeight:'bold',color:'blue',paddingRight:'5px',width:'50%',
         marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
        <hr />
      </Typography>
      <Typography type="body2" align="left">
        <div style={{paddingLeft:'60px'}}>
        <b>State of Aadhaar</b>
        </div>
      <Avatar src="./DA.jpeg" style={{marginTop:'-20px'}} />
      <Chip label="Follow"
        style={{fontWeight:'bold',color:'blue',paddingRight:'5px',width:'50%',
        marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
      <hr />
      </Typography>
      <Typography type="body2" align="centre">
        <div style={{paddingLeft:'60px'}}>
        <b>#DestroyTheAadhaar</b>
        </div>
      <Avatar src="./DS.jpg" style={{marginTop:'-20px'}} />
      <Chip label="Follow"
        style={{fontWeight:'bold',color:'blue',paddingRight:'5px',width:'50%',
        marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
      </Typography>
   </Paper>

   <Paper style={{paddingLeft:'15px', width:'24%', marginLeft:'60px',marginTop:'15px'}}>
      <br />
      <Typography type="title" gutterBottom align="left">
        <b>Trends for you</b>
      </Typography>
      <br />
      <Typography type="body2" gutterBottom align="left">
        <div style={{color:'blue'}}>
        <b>#INDvsSL</b>
        </div>
      </Typography>
      <Typography type="body1" gutterBottom align="left">
        17.2k Tweets
      </Typography>
      <Typography type="body2" gutterBottom align="left">
        <div style={{color:'blue'}}>
        <b>#AskSRK</b>
        </div>
      </Typography>
      <Typography type="body1" gutterBottom align="left">
        22.8k Tweets
      </Typography>
      <Typography type="body2" gutterBottom align="left">
        <div style={{color:'blue'}}>
        <b>#ZairaWasim</b>
        </div>
      </Typography>
      <Typography type="body1" gutterBottom align="left">
        20.3k Tweets
      </Typography>
      <Typography type="body2" gutterBottom align="left">
        <div style={{color:'blue'}}>
        <b>#MS Dhoni</b>
        </div>
      </Typography>
      <Typography type="body1" gutterBottom align="left">
        24.8k Tweets
      </Typography>
      <Typography type="body2" gutterBottom align="left">
        <div style={{color:'blue'}}>
        <b>#WingsTourFinalDay3</b>
        </div>
      </Typography>
      <Typography type="body1" gutterBottom align="left">
        480k Tweets
      </Typography>
      <Typography type="body1" gutterBottom align="left" style={{color:'blue'}}>
        <b>#VikasKhojYatra</b>
      </Typography>
      <Typography type="body2" gutterBottom align="left">
        12.1k Tweets
      </Typography>
      <br />
   </Paper>
    </div>
  );
}

export default PaperSearchSeed;
