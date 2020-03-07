import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <div id="main">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
