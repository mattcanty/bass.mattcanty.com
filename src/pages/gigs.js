import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

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
          <header className="major">
            <h2>Upcoming Gigs</h2>
          </header>
          <table>
            <tbody>
              <tr>
                <td>When</td>
                <td>Who</td>
                <td>Where</td>
                <td>Tickets</td>
              </tr>
              <tr>
                <td>
                  26<sup>th</sup> May
                </td>
                <td>DG Solaris</td>
                <td>Paperdress Vintage</td>
                <td>
                  <a href="">TBA</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="two">
          <header className="major">
            <h2>Past Gigs</h2>
          </header>
          <table>
            <tbody>
              <tr>
                <td>When</td>
                <td>Who</td>
                <td>Where</td>
                <td>Tickets</td>
              </tr>
              <tr>
                <td>
                  26<sup>th</sup> May
                </td>
                <td>DG Solaris</td>
                <td>Paperdress Vintage</td>
                <td>
                  <a href="">TBA</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Layout>
    )
  }
}

export default HomeIndex
