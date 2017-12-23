import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { AppBar } from 'react-toolbox'
import Menu from './Menu'
import classes from './NavBar.scss'
import { connect } from 'react-redux'

class NavBar extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    searchPage: PropTypes.object.isRequired
  }

  state = {
    open: false
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  // TODO The clickable logo should be it's own component
  handleLogoClick = () => {
    const redirect = this.props.user.loggedIn ? '/dashboard' : '/'
    browserHistory.push(redirect)
  }

  handleLinkToFindAmb = () => {
    const { searchPage } = this.props
    if (searchPage.mounted) {
      // do nothing
    } else {
      browserHistory.push({
        pathname: '/search'
      })
    }
  }

  render () {
    const navLogoEl = (
      <div data-test='navLogo' className={classes.logoContainer} onClick={this.handleLogoClick}>
        <i className={classes.logo} />
      </div>
    )

    const {transparent, isHome} = this.props
    const classNames = [classes.appBar]

    if (transparent && isHome) classNames.push(classes.transparent)

    return (
      <header>
        <AppBar
          className={classNames.join(' ')}
          leftIcon='menu'
          onLeftIconClick={this.handleToggle}
          rightIcon='search'
          onRightIconClick={this.handleLinkToFindAmb}
          fixed
          flat
        >
          {navLogoEl}
          <Menu
            active={this.state.open}
            onClose={this.handleClose}
            {...this.props}
          />
        </AppBar>
      </header>
    )
  }
}

NavBar.propTypes = {
  transparent: React.PropTypes.bool,
  isHome: React.PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    transparent: state.navBar.transparent,
  }
}

export default connect(mapStateToProps, null)(NavBar)
