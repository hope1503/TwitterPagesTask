import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const style = {
  width: '75%',
  maxWidth:800,
  marginLeft:'15px',
};
function PaperSheetSingle() {
  return (
      <div style={style}>
      <Paper style={{width:'29%',marginLeft:'1045px',marginTop:'-760px',paddingTop:'15px',paddingLeft:'15px'}}>
        <Typography type="title" align="left">
          Who to follow
        </Typography>
        <br />
        <Typography type="body2" align="center">
          <b>Shivathmika Ranjan</b>
          <Avatar src="./SR.jpg" style={{marginTop:'-20px'}} />
          <Chip label="Follow" style={{fontWeight:'bold',color:'dodgerblue',paddingRight:'5px',
          width:'50%',marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
          <hr />
        </Typography>
        <Typography type="body2" align="center">
          <b>Sathvikaa Rajagopalan</b>
          <Avatar src="./jk.jpg" style={{marginTop:'-20px'}} />
          <Chip label="Follow" style={{fontWeight:'bold',color:'dodgerblue',paddingRight:'5px',
          width:'50%',marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
          <hr />
        </Typography>
        <Typography type="body2" align="center">
          <b>Velmurugan Shiva</b>
          <Avatar src="./vs.jpg" style={{marginTop:'-20px'}} />
          <Chip label="Follow" style={{fontWeight:'bold',color:'dodgerblue',paddingRight:'5px',
          width:'50%',marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
          <hr />
        </Typography>
        <Typography type="body2" align="center">
          <b>Meenakshi Sundar</b>
          <Avatar src="./flower.jpg" style={{marginTop:'-20px'}} />
          <Chip label="Follow" style={{fontWeight:'bold',color:'dodgerblue',paddingRight:'5px',
          width:'50%',marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
          <hr />
        </Typography>
        <Typography type="body2" align="center">
          <b>Soundarya Karthik</b>
          <Avatar src="./SK.jpg" style={{marginTop:'-20px'}} />
          <Chip label="Follow" style={{fontWeight:'bold',color:'dodgerblue',paddingRight:'5px',
          width:'50%',marginLeft:'50px',backgroundColor:'lightgrey',marginTop:'-20px'}} />
        </Typography>
        <br />
      </Paper>
    </div>
   );
}

export default PaperSheetSingle;
