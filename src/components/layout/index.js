import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles/global' 
import Header from '../header'
import ThemeButton from '../theme-button'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <ThemeButton />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
