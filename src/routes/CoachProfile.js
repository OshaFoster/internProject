import React from 'react'
import Header from "../components/Header/Header"


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
            <h1>Bob Thomas</h1>
            <p>Male</p>
            <p>San Francisco</p>
        </div>
        </div>
        <div className="div2">
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
