import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class MessageReceivedPage extends React.Component {
  render() {
    const siteTitle = 'Matt Canty'
    const siteDescription =
      'Matt Canty is a musician from London, UK. Main instrument is bass guitar but also a proficient rhythm guitarist.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <h2>Message Received</h2>
            <p>
              Thanks for your message, I'll be back in touch as soon as I can.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default MessageReceivedPage
