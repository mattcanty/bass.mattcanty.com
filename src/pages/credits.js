import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Credits from '../data/Credits'

class HomeIndex extends React.Component {
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

        <section id="one">
          <ul className="actions">
            <li>
              <a href="/" className="button">
                Back to Homepage
              </a>
            </li>
          </ul>
          <h2>Credits</h2>

          <Gallery images={Credits} />
        </section>
      </Layout>
    )
  }
}

export default HomeIndex
