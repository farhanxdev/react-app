
import { useState } from 'react'

import covocation from './photo/convocation.jpg'
import logo from './photo/lincoln-.png'
import abraham from './photo/abraham linclon.jpg'
import home from './photo/home.png'
import program from './photo/programe.png'
import note from './photo/note.png'
import Assignment from './photo/assinment.png'
import profile from './photo/profile.png'
import plagiarism from './photo/copyright.png'
import exam from './photo/exam.png'








function LoginPage({ loginFunction }) {
  function userLogin() {
    var username = document.getElementById('username').value;
    loginFunction(username)
  }

  return (
    <div>

      <div style={{ height: 550 }}>
        <div style={{ position: 'absolute', right: 470, top: 120, fontSize: 20, fontSize: 22 }}>We are here to guide you about your Education</div>
        <div style={{ position: 'absolute', right: 150, top: 150, fontSize: 50, fontWeight: 'bold', }}>LINCOLN LEARNING SYSTEM</div>
        <img src={covocation} style={{ height: 550, width: '100vw' }}></img>
        <div style={{ position: 'absolute', backgroundColor: '#ffffff88', width: '100vw', top: 405 }}>
          <img src={logo} style={{ height: 150, marginLeft: 150 }}></img>
        </div>
      </div>

      <div style={{ backgroundColor: 'blue', width: '100vw' }}>
        <div style={{ fontSize: 30, marginLeft: 150, color: 'white' }}>ABOUT MY LLS</div>
        <div style={{ marginLeft: 150, color: 'white' }}>myLLS is a web portal system that provides Lincoln University College students with individualized </div>
        <div style={{ marginLeft: 150, color: 'white', lineHeight: 2, letterSpacing: "0.5px" }}>web services and information - all from one simple login point. Once you successfully have</div>
        <div style={{ marginLeft: 150, color: 'white' }}>"logged in," myLLS will act as a gateway to all the resources you will need as an LUC student.</div>
        <div style={{ marginLeft: 600, fontSize: 22, color: '#fffd00', marginTop: 25 }}>we ensure your success</div>
        <div style={{ marginLeft: 150, fontSize: 30, marginTop: 20 }}>NOTICE BOARD</div>

        <div style={{ backgroundColor: '#ffffff88', display: 'flex', justifyContent: 'center', padding: 10 }}>@ 2016 Lincoln University College</div>


      </div>

      <div style={{ position: 'absolute', right: 350, bottom: 25, backgroundColor: 'white', height: 300, width: 300, borderRadius: 10, border: 'solid 5px' }}>
        <div style={{ fontSize: 35, fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center', padding: 30 }}>LOGIN</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input id='username' placeholder='user name' style={{ height: 25, width: 250, borderRadius: 5 }} ></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input placeholder='password' style={{ height: 25, width: 250, borderRadius: 5, marginTop: 20 }}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>Forgot your password?</div>
        <span style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>Click Here</span>
        <button onClick={userLogin} style={{ height: 30, width: 100, borderRadius: 5, marginTop: 20, marginLeft: 100, color: 'white', backgroundColor: 'black' }}>Log In</button>


      </div>

    </div>
  );
}



function HomePage({ username }) {
  return (
    <div>
      <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'end' }}>
        <img src={abraham} style={{ height: 100, borderRadius: 70 }}></img>
        <div style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>MY LLS </div>
        <div style={{ flex: 1 }} />
        <div style={{ color: 'white' }}>WELCOME    {username} </div>
        <div style={{ width: 200 }}></div>
        <div style={{ color: 'white', marginLeft: 20 }}>[LOG OUT]</div>
        <div style={{ color: 'white', marginLeft: 30 }}>[CHANGE PASSWORD]</div>
      </div>
      <div style={{ display: 'flex', marginTop: 20, fontSize: 18 }}>
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div >WELCOME    {username} </div>
          <div>Your university Student id:</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ borderBottom: 'solid 1px', textAlign: 'center' }}>UPDATE CONTACT DETAILS</div>
          <div style={{ backgroundColor: 'red', color: 'white', fontSize: 16, textAlign: 'center' }}>PLEASE PAY YOUR FEES IN ADVANCE <br /> TO AVOID INCONVENIENCES</div>
          <div style={{ borderBottom: 'solid 1px', textAlign: 'center' }}>	Mentor/Coordinator Contact Details</div>
        </div>
        <div style={{ flex: 2, marginLeft: 30, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>	PROGRAMME:</div>
          <div>CURRENT SEMESTER:</div>
          <div>YOUR INTAKE:</div>
        </div>


      </div>
<div style={{marginTop:5,overflow:'scroll'}}>
      <div style={{width:1725,display:'flex', fontSize: 25, color: 'white',  alignItems: 'center', gap: 20 }}>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={home} style={{ height: 25 }}></img>
          <span>Home</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={program} style={{ height: 25 }}></img>
          <span>My programe</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={note} style={{ height: 25 }}></img>
          <span>My Lecture note</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={Assignment} style={{ height: 25 }}></img>
          <span>My Assignment</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={profile} style={{ height: 25 }}></img>
          <span>My Forum</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={plagiarism} style={{ height: 25 }}></img>
          <span>Apply plagiarism</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={exam} style={{ height: 25 }}></img>
          <span>My Exam Slip</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={exam} style={{ height: 25 }}></img>
          <span>Evaluation</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 5,display:'inline-block' }}>
          <img src={exam} style={{ height: 25 }}></img>
          <span>e-Barry</span>
        </div>

      </div>
      </div>

      <div style={{display:'flex',gap:20,marginTop:20}}>

        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10 }}>
            <div style={{backgroundColor:'red',padding:15,textAlign:'center',borderRadius:'10px 10px 0px 0px',color:'white'}}>MY STATUS</div>
            <div style={{fontSize:18, display:'flex',flexDirection:'column',gap:5,marginLeft:10}}>
              <div>1. Academic Progression</div>
              <div>2. Subject Registration</div>
              <div>3. Attendance-Subject Registration</div>
              <div>4. Result-Subject Registration</div>
              <div>5. Attendance [Semester Pattern]</div>
              <div>6. Result [Semester Pattern]</div>
              <div>7. Continuous Assessment</div>
              <div>8. Exemption/Credit Transfer</div>
              <div>9. Upload Project Documents</div>
              <div>10. View Tuition Fees Status</div>
            </div>
        </div>
        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10}}>
            <div style={{backgroundColor:'red',padding:15,borderRadius:'10px 10px 0px 0px',color:'white',textAlign:'center'}}>DISCIPLINARY ACTION</div>
            <div style={{}}>
            <div style={{backgroundColor:'darkgrey',padding:30,borderBottom:'solid 2px'}}>Warning Letter Annoucements</div>
            <div style={{padding:30,backgroundColor:'darkgrey',borderBottom:'solid 2px'}}>Appeal Against Low Attendance</div>
            <div style={{padding:30,backgroundColor:'darkgrey',borderBottom:'solid 2px'}}>Probation Letter Annoucements</div>
            </div>
        </div>
        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10 }}>
            <div style={{backgroundColor:'red',padding:15,borderRadius:'10px 10px 0px 0px',color:'white',textAlign:'center'}}>ANNOUNCEMENTS</div>
            <div style={{marginLeft:10}}>
            <div style={{padding:20}}>1. STUDENT REPRESENTATIVE COUNCIL SESSION 2022/2023</div>
            <div style={{padding:20}}>2. Publication Requirements for MBA and Master Degree by Coursework Students:</div>
            </div>
        </div>
       
      </div>
      <div style={{display:'flex',gap:20,marginTop:20}}>

        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10 }}>
            <div style={{backgroundColor:'red',padding:15,textAlign:'center',borderRadius:'10px 10px 0px 0px',color:'white'}}>APPLICATION AND REQUEST</div>
            <div style={{fontSize:18, display:'flex',flexDirection:'column',gap:15,marginLeft:10}}>
              <div>1. Credit Transfer Application</div>
              <div>2. Certificate and Transcript Application</div>
              <div>3. Complain Application</div>
              <div>4. Passport Submission/Application</div>
              <div>5. View Passport Status</div>
              <div>6. View Application</div>
             
            </div>
        </div>
        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10}}>
            <div style={{backgroundColor:'red',padding:15,borderRadius:'10px 10px 0px 0px',color:'white',textAlign:'center'}}>STUDENT ESSENTIAL LINKS</div>
            <div style={{}}>
            <div style={{padding:'20px'}}>1. Contact Details Update</div>
            <div style={{padding:'20px'}}>2. Student Hand Book</div>
            <div style={{padding:'20px'}}>3. Apply Bank Letter</div>
            </div>
        </div>
        <div style={{height: 300, flex: 1, border: 'solid 1px',borderRadius:10 }}>
            <div style={{backgroundColor:'red',padding:15,borderRadius:'10px 10px 0px 0px',color:'white',textAlign:'center'}}>MY FORUM</div>
            <div style={{marginLeft:10}}>
            <div style={{padding:20}}>Presently No Ongoing Forum Discussion Available</div>
            
            </div>
        </div>
       
      </div>


    </div>

  );
}


function App() {

  const [loggedIn, setLoggedIn] = useState(undefined);

  function login(username) {
    setLoggedIn(username);
  }

  if (loggedIn) return (<HomePage username={loggedIn} />);
  else return (<LoginPage loginFunction={login} />);
}


export default App;

