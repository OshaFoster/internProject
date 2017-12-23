import React from 'react'
import NavBar from 'containers/NavContainer'
import Progress from 'components/Progress'
import styles from './SimpleLayout.scss'
import Footer from 'containers/FooterSimpleContainer'
import { Layout, Panel } from 'react-toolbox'

export const SimpleLayout = ({ children }) => (
  <Layout>
    <NavBar />
    <Progress />
    <Panel className={styles.core_layout}>
      <div data-test={location.pathname} className={styles.content_area}>
        {children}
        <Footer />
      </div>
    </Panel>
  </Layout>
)

SimpleLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default SimpleLayout
