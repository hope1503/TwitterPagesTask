import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const style = {
  width: '75%',
  maxWidth:800,
  marginLeft:'15px',
};

function PaperSearchShow() {
  return (
      <div style={style}>
      <Paper style={{paddingTop:'10px',width:'79%',height:'75%',paddingLeft:'10px',
          marginLeft:'400px',marginTop:'-975px'}}>
        <Typography type="body2" align="left" style={{paddingLeft:'50px',wordSpacing:'10px'}}>
          <b>Nikhil</b>  @nixxin  Dec7
        </Typography>
        <Avatar src="./NL.jpg" style={{marginTop:'-20px'}} />
        <Typography type="body2" align="left" style={{paddingLeft:'50px'}}>
            1. If you do not have Aadhaar , notification extending deadline for you is expected tomo/day ater. DONT LINK
            2. If you have Aadhaar, appeal against your linking is next week,so DONT LINK until SC passess an order next week.
            You still have 3 weeks for bank deadline so DONT PANIC
        </Typography>
        <br />
        <Paper style={{width:'82%',height:'100%',marginLeft:'50px',padding:'15px'}}>
          <Typography type="body2" align="left">
             <b>Ruchica</b>  @ruchicatomar
             <br />
             @nixxin Help! What sorcery is this? The number of messages and notifications
             from banks to link Aadhaar have gone up several notches!
            </Typography>
        </Paper>
        <br />
        <br />
            <i style={{marginLeft:'100px'}} class="material-icons">insert_comment</i>
            <i style={{marginLeft:'120px'}} class="material-icons">crop</i>
            <i style={{marginLeft:'120px'}} class="material-icons">favorite</i>
            <i style={{marginLeft:'120px'}} class="material-icons">textsms</i>
        <br />
        <br />
    </Paper>
    <Paper style={{paddingTop:'10px',width:'79%',height:'75%',paddingLeft:'10px',marginLeft:'400px'}}>
        <Typography type="body2" align="left" style={{paddingLeft:'50px',wordSpacing:'10px'}}>
          <b>Arvind</b> @jalajboy Dec8
        </Typography>
        <Avatar src="./AV.jpg" style={{marginTop:'-20px'}} />
        <Typography type="body2" align="left" style={{paddingLeft:'50px'}}>
          First they pushed SMS, email
          Then they started calls
          Finally they have started adding Aadhaar without your consent.
        </Typography>
        <br />
      <Paper style={{width:'78%',height:'100%',paddingLeft:'50px',marginLeft:'50px'}}>
        <Typography type="body2" align="left" style={{marginLeft:'20px'}}>
           <b>AAPVikram @vikrameffects</b>
           <br />
           <Avatar src="./VK.jpg" style={{marginTop:'-20px',marginLeft:'-50px'}} />
           It is true that HDFC bank forcibly linking current account with personal
           AADHAAR, without permissions to do so. No wonder those AADHAAR PROMPTS
           have diapperaed but who allowed this? @jalajboy
        </Typography>
      </Paper>
      <br />
      <br />
      <i style={{marginLeft:'100px'}} class="material-icons">insert_comment</i>
      <i style={{marginLeft:'120px'}} class="material-icons">crop</i>
      <i style={{marginLeft:'120px'}} class="material-icons">favorite</i>
      <i style={{marginLeft:'120px'}} class="material-icons">textsms</i>
      <br />
      <br />
   </Paper>
        <br />
        </div>

     );
}

export default PaperSearchShow;
