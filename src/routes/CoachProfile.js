import React from 'react'


class CoachProfile extends React.Component {


  render () {




    return (
    <div className="parent">
        <div className="div1">
        <div className="imageDiv">
            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODALYDYo2dqN0DG_kPNi2X7EAy1K8SpRRZQWkNv9alC62IHggOw" alt="profile" />
        </div>

        <div className="about">
            <h1>Bob Thomas</h1>
            <p>gender</p>
            <p>location</p>
        </div>
        </div>
        <div className="div2">
            <div className="videoDiv">
            <iframe style={{height: '400px', width: '550px'}} src=""></iframe>
            </div>
        </div>
    </div>


    )
  }
}
export default CoachProfile
