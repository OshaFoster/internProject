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
            <p><span> Specialty  </span> Life Coach</p>
            <p><span> Location  </span> San Francisco</p>
            <p><span> Connect  </span> thomas_bob@gmail.com</p>
            <p><span> Request Free Session  </span> Link </p>
        </div>
        </div>
            <Action/>
        <div className="div2">
            <div className='videoDiv'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jg3v1GsmvZ4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
            <div className="infoDiv">
                <div><h2 style={{color: "#cd5360"}}>Specialties</h2></div>
                <div><h3>Concerns I help with</h3>
            <p>Live your best life. Find a passionate relationship. Find the career that feeds your soul. </p></div>
            <h3>Experience/Education<p> MD Social Sciences, Studied Life Coaching with David Gray </p> </h3>
        <h3>Background:<p> Lorem ipsum dolor sit amet,
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat</p></h3>
                            <h3>Methods of coaching <p> In person, phone, video</p></h3>
                        <h3>Languages:<p> English </p></h3>
                    <h3>Form of payment:<p> Credit, Debit, Check </p></h3>
                <h3>Hourly rate:<p> 45$ hourly </p></h3>


            </div>
         </div>
        </div>
        </div>

    )
  }
}
export default CoachProfile
