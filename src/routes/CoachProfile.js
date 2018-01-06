import React from 'react'


class CoachProfile extends React.Component {


  render () {




    return (

        <div className="parent">
        <div className="imageDiv">
            <img className="profileImg" src="https://au.junkfreejune.org/themes/base/production/images/default-profile.png" alt="profile" />
        </div>

        <div className="about">
            <h1>Coach Profile</h1>
            <h3>gender</h3>
            <h3>location</h3>

        </div>

        </div>

    )
  }
}
export default CoachProfile
