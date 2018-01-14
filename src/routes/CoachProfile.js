import React from 'react'
import Header from "../components/Header/Header"
import Action from "../components/Action/ActionBar"


class CoachProfile extends React.Component {


  render () {



    return (
        <div>
        <Header/>
        <div className="parent" style={{backgroundColor:'#f4f4f4'}}>
        <div className="div1">
        <div className="imageDiv">
            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODALYDYo2dqN0DG_kPNi2X7EAy1K8SpRRZQWkNv9alC62IHggOw" alt="profile" />
        </div>

        <div className="about">
            <h1>Bob Thomas<span style={{fontSize:'16px', color:'#414141'}}> , Male</span></h1>
            <p><span> Specialty: </span> Life Coach</p>
            <p><span> Location: </span> San Francisco</p>
            <p><span> Connect: </span> thomas_bob@gmail.com</p>
            <p><span> Request Free Session: </span> Link </p>
        </div>
            <Action/>
        <div className="div2">
            <div className='videoDiv'>Video</div>
            <div className="infoDiv">
                <h2 style={{color: "#cd5360"}}>Specialties:</h2>
                <h3>Concerns I help with:<span> Life goals, career change, relationships </span></h3>
                <h3>Experience/Education:<span> MD Social Sciences, Studied Life Coaching with David Gray </span> </h3>
                <h3>Background:<span> Lorem ipsum dolor sit amet,
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat</span></h3>
                <h3>Methods of coaching:<span> In person, phone, video </span></h3>
                <h3>Languages:<span> English </span></h3>
                <h3>Form of payment:<span> Credit, Debit, Check </span></h3>
                <h3>Hourly rate:<span> 45$ hourly </span></h3>


            </div>
         </div>
        </div>
        </div>
        </div>

    )
  }
}
export default CoachProfile
