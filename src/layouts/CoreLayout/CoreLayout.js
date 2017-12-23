import React from 'react'
import NavBar from 'containers/NavContainer'
import Progress from 'components/Progress'
import styles from './CoreLayout.scss'
import Footer from 'containers/FooterContainer'
import { Layout, Panel } from 'react-toolbox'

export const CoreLayout = ({ children }) => {
  const panelClasses = [styles.core_layout]
  const isHome = location.pathname === '/'

  if (!isHome) {
    // doc this better
    // location is avail in component (global)
    panelClasses.push(styles.padding_top)
    panelClasses.push(styles.max_width)
  }

  return <Layout>
    <NavBar isHome={isHome} />
    <Progress />
    <Panel className={panelClasses.join(' ')}>
      <div data-test={location.pathname} className={styles.content_area}>
        {children}
        <Footer />
      </div>
    </Panel>
  </Layout>
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  isHome: React.PropTypes.bool
}

export default CoreLayout
