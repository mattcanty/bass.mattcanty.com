import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import GigList from '../components/GigList'
import Gigs from '../data/Gigs'

const isFutureGig = gig => {
  return gig.when.toDateString() >= new Date().toDateString()
}

const isPastNotableGig = gig => {
  return gig.when.toDateString() < new Date().toDateString() && gig.notable
}

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
          <GigList title="Upcoming Gigs" gigs={Gigs.filter(isFutureGig)} />
          <GigList
            title="Past Notable Gigs"
            gigs={Gigs.filter(isPastNotableGig)}
          />
        </section>
      </Layout>
    )
  }
}

export default HomeIndex
