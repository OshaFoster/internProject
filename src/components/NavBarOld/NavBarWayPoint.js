import React, { PropTypes } from 'react'
import Waypoint from 'react-waypoint'
import { connect } from 'react-redux'
import { onEnter, onLeave } from '../../store/modules/navBar'

export function NavBarWayPoint ({onEnter, onLeave}) {
  return (
    <Waypoint onEnter={onEnter} onLeave={onLeave} />
  )
}

NavBarWayPoint.propTypes = {
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
}

const mapDispatchToProps = {
  onEnter,
  onLeave
}

export default connect(null, mapDispatchToProps)(NavBarWayPoint)
