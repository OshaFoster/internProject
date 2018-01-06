import React, { Component, PropTypes } from 'react'
import { Drawer, ListDivider } from 'react-toolbox'
import MenuLink from './MenuLink'
import { List } from 'react-toolbox/lib/list'
import Avatar from 'react-toolbox/lib/avatar'
import DefaultAvatar from 'static/defaultAvatar.jpg'
import {getBecomeAmbUrl} from 'helpers/utilities'
import drawerTheme from './DrawerTheme.scss'
import listTheme from './ListTheme.scss'
import ambDrawerUserTheme from './AmbDrawerUserTheme.scss'

class Menu extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    profile: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    searchPage: PropTypes.object.isRequired,
    pathname: PropTypes.string,
    search: PropTypes.string
  }

  test = () => {

  }

  render () {
    const { active, logout, user, onClose, profile, searchPage, pathname, search } = this.props
    const isAmb = profile ? profile.is_amb : null
    const prevPath = `${pathname}${search !== null ? search : ''}`

    // ----------------------------
    // Menu Items
    // ----------------------------
    const homeEl = (
      <div
        data-test='menu-home'
        key='home'
      >
        <MenuLink
          url='/'
          leftIcon='home'
          caption='Home'
          onClick={onClose}
        />
      </div>
    )

    const dividerEl = (
      <ListDivider key='divider' theme={isAmb ? ambDrawerUserTheme : listTheme} />
    )

    let findAmbEl
    if (searchPage.mounted) {
      findAmbEl = (
        <div
          data-test='menu-search'
          key='search'
        >
          <MenuLink
            leftIcon='search'
            caption='Find Your Advocate'
            onClick={() => {
              onClose()
              // do nothing
            }}
          />
        </div>
      )
    } else {
      findAmbEl = (
        <div
          data-test='menu-search'
          key='search'
        >
          <MenuLink
            url='/search'
            leftIcon='search'
            caption='Find Your Advocate'
            onClick={onClose}
          />
        </div>
      )
    }

    const becomeAmbEl = (
      <div
        data-test='menu-become-amb'
        key='become-amb'
      >
        <MenuLink
          url={getBecomeAmbUrl(user)}
          leftIcon='mood'
          caption='Become an Advocate'
          onClick={onClose}
          state={{ prevPath }}
        />
      </div>
    )

    const dashboardEl = (
      <div
        data-test='menu-dashboard'
        key='dashboard'
      >
        <MenuLink
          url='/dashboard'
          leftIcon='dashboard'
          caption='Dashboard'
          onClick={onClose}
        />
      </div>
    )

    const settingsEl = (
      <div
        data-test='menu-settings'
        key='settings'
      >
        <MenuLink
          url={`/profile/${user.id}/edit`}
          leftIcon='settings'
          caption='Settings'
          onClick={onClose}
        />
      </div>
    )

    let avatar = null
    if (profile) {
      avatar = (
        <Avatar
          cover
          image={profile.photo_url || DefaultAvatar}
        />
      )
    }

    const earnings = (profile) => (
      <div>
        <span>
          Earnings:
        </span>
        <span className={ambDrawerUserTheme.earnings}>
          {` $${profile.earnings.toFixed(2)}`}
        </span>
      </div>
    )

    const accountEl = (
      <div
        data-test='menu-account'
        key='account'
      >
        <MenuLink
          ripple={!isAmb}
          url={isAmb ? `/profile/${user.id}` : '/dashboard'}
          caption={
            <div data-test='username' className={ambDrawerUserTheme.fullName}>
              {profile ? `${profile.first_name} ${profile.last_name}` : 'My Account'}
            </div>
          }
          legend={isAmb ? earnings(profile) : null}
          isAmb={isAmb}
          onClick={onClose}
          avatar={avatar}
        />
      </div>
    )

    const signOutEl = (
      <div
        data-test='menu-signout'
        key='signout'
      >
        <MenuLink
          url='/'
          leftIcon='reply'
          caption='Sign Out'
          onClick={() => {
            onClose()
            setTimeout(logout, 100)
          }}
        />
      </div>
    )

    const signUpEl = (
      <div
        data-test='menu-signup'
        key='signup'
      >
        <MenuLink
          url='/signup'
          leftIcon='person_add'
          caption='Sign Up'
          onClick={onClose}
          state={{ prevPath }}
        />
      </div>
    )

    const signInEl = (
      <div
        data-test='menu-signin'
        key='signin'
      >
        <MenuLink
          url='/signin'
          leftIcon='person'
          caption='Sign In'
          onClick={onClose}
          state={{ prevPath }}
        />
      </div>
    )

    const faqEl = (
      <div
        data-test='menu-faq'
        key='faq'
      >
        <MenuLink
          url='/faq'
          leftIcon='help'
          caption='FAQ'
          onClick={onClose}
          state={{ prevPath }}
        />
      </div>
    )

    // ----------------------------
    // Drawer menu lists
    // ----------------------------
    let menuItemsEl

    if (!user.loggedIn) {
      menuItemsEl = [
        homeEl,
        findAmbEl,
        becomeAmbEl,
        faqEl,
        signUpEl,
        signInEl,
      ]
    } else if (isAmb) {
      menuItemsEl = [
        accountEl,
        dividerEl,
        dashboardEl,
        findAmbEl,
        settingsEl,
        faqEl,
        signOutEl
      ]
    } else {
      menuItemsEl = [
        accountEl,
        dividerEl,
        dashboardEl,
        findAmbEl,
        becomeAmbEl,
        settingsEl,
        faqEl,
        signOutEl
      ]
    }

    return (
      <Drawer
        active={active}
        onOverlayClick={onClose}
        theme={drawerTheme}
      >
        <div data-test='nav-menu'>
          <List theme={listTheme}>
            {menuItemsEl}
          </List>
        </div>
      </Drawer>
    )
  }
}

export default Menu
