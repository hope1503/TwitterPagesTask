import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const style = {
  width: '75%',
  maxWidth:800,
  marginLeft:'15px',
};

function PaperSheetShow() {
  return (
      <div style={style}>
      <Paper style={{paddingTop:'10px',width:'79%',height:'75%',paddingLeft:'10px',marginLeft:'385px',marginTop:'-706px'}}>
        <Typography type="body2" align="left" style={{paddingLeft:'70px',wordSpacing:'10px'}}>
          <b>MajorLeagueHacking</b>  @MLHacks  Nov29
        </Typography>
        <Avatar src="./ML.jpg" style={{marginTop:'-20px'}} />
        <Typography type="body2" align="left" style={{paddingLeft:'70px'}}>
            Whos ready for #LocalHackDay this Saturday? If youre looking to brush up on
            your skills before the event, check out @HasuraHQs webinar from last week!
            They covered Building Apps Quickly at a Hackathon. You can find the recording
            here:
        </Typography>
        <br />
        <Paper style={{width:'78%',height:'100%',paddingLeft:'50px',marginLeft:'75px'}}>
          <Typography type="body2" align="left" style={{paddingLeft:'60px'}}>
          <Avatar src="./MLH.jpg" style={{width:'23%',height:'75%',marginLeft:'-100px'}} />
            <div style={{marginTop:'-50px',marginLeft:'5px'}}>
             <b>Build apps quickly at hackathons</b>
             <br />
             This webinar was conducted on 21st November for participants of 2 hackathons
             that we are partners at in December 2017-MLH Local Hack Day and Rajasthan Hackathon...
             </div>
          </Typography>
          <Typography type="body1" align="left" style={{marginLeft:'65px'}}>
             youtube.com
          </Typography>
        </Paper>
        <br />
        <br />
        <i style={{marginLeft:'120px'}} class="material-icons">insert_comment</i>
        <i style={{marginLeft:'120px'}} class="material-icons">crop</i>
        <i style={{marginLeft:'120px'}} class="material-icons">favorite</i>
        <i style={{marginLeft:'120px'}} class="material-icons">textsms</i>
        <br />
        <br />
    </Paper>
    <Paper style={{paddingTop:'10px',width:'79%',height:'75%',paddingLeft:'10px',marginLeft:'385px'}}>
        <Typography type="body2" align="left" style={{paddingLeft:'70px',wordSpacing:'10px'}}>
          <b>Rajkumar</b> @Raj_Thamizhan Nov5
        </Typography>
        <Avatar src="./RK.jpg" style={{marginTop:'-20px'}} />
        <Typography type="body2" align="left" style={{paddingLeft:'70px'}}>
            Amazon patents unmanned airship taking its cargo to the sky and
            dropping at the fulfillment center. Feeding delivery...
        </Typography>
        <br />
      <Paper style={{width:'78%',height:'100%',paddingLeft:'50px',marginLeft:'75px'}}>
        <Typography type="body2" align="left" style={{marginLeft:'60px'}}>
        <Avatar src="./AM.jpg" style={{width:'23%',height:'75%',marginLeft:'-100px'}} />
          <div style={{marginTop:'-50px',marginLeft:'5px'}}>
           <b>Amazon airship: Amazon patents unmanned airship...</b>
           <br />
           ALEXANDRIA, VIRGINIA--Amazon has filed a patent for a self-driving airship
           that can store inventory and be used as a base to launch delivery drones.
           </div>
        </Typography>
        <Typography type="body1" align="left" style={{marginLeft:'65px'}}>
           youtube.com
        </Typography>
      </Paper>
      <br />
      <br />
      <i style={{marginLeft:'120px'}} class="material-icons">insert_comment</i>
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

export default PaperSheetShow;
