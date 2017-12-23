import React, { Component, PropTypes } from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import { ListItem, ListItemContent } from 'react-toolbox/lib/list'
import convertUrlToObject from 'helpers/convertUrlToObject'
import theme from './ListTheme.scss'
import ambDrawerUserTheme from './AmbDrawerUserTheme.scss'

class MenuLink extends Component {
  static propTypes = {
    url: PropTypes.string,
    isAmb: PropTypes.bool,
    state: PropTypes.object
  }

  handleLinkToFindAmb = () => {
    browserHistory.push({
      pathname: '/search'
    })
  }

  render () {
    const { url, state, isAmb, ...rest } = this.props

    if (url && url === '/') {
      return (
        <IndexLink to={url} activeClassName='route--active' >
          <ListItem theme={theme} {...rest} />
        </IndexLink>
      )
    } else if (isAmb) {
      return (
        <ListItem itemContent={
          <ListItemContent theme={ambDrawerUserTheme} {...rest} >
            <Link to={{ ...convertUrlToObject(url), state: state }}>
              <div className={ambDrawerUserTheme.linkText}>
                View my profile
              </div>
            </Link>
          </ListItemContent>
        } {...rest} />
      )
    } else if (url) {
      return (
        <Link to={{ ...convertUrlToObject(url), state: state }} activeClassName='route--active' >
          <ListItem theme={theme} {...rest} />
        </Link>
      )
    } else {
      return <ListItem theme={theme} {...rest} />
    }
  }
}

export default MenuLink
