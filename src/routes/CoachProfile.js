import React from 'react'
import Header from "../components/Header/Header"
import Action from "../components/Action/ActionBar"


class CoachProfile extends React.Component {


  render () {




    return (
        <div>
        <Header/>
    <div className="parent">
        <div className="div1">
        <div className="imageDiv">
            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODALYDYo2dqN0DG_kPNi2X7EAy1K8SpRRZQWkNv9alC62IHggOw" alt="profile" />
        </div>

        <div className="about">
            <h1>Bob Thomas<span style={{fontSize:'16px', color:'#414141'}}> , Male</span></h1>
            <p><span style={{fontSize:'16px', color:'#414141'}}> Specialty: </span> Life Coach</p>
            <p><span style={{fontSize:'16px', color:'#414141'}}> Location: </span> San Francisco</p>
            <p><span style={{fontSize:'16px', color:'#414141'}}> Connect: </span> thomas_bob@gmail.com</p>
            <p><span style={{fontSize:'16px', color:'#414141'}}> Request Free Session: </span> Link </p>
        </div>
        </div>
        <div className="div2">
            <Action/>
            <div className="videoDiv">
            <iframe style={{height: '300px', width: '450px'}} src=""></iframe>
            </div>
        </div>
    </div>
        </div>



    )
  }
}
export default CoachProfile
