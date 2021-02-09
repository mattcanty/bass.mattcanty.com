import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import GigList from '../components/GigList'
import Gigs from '../data/Gigs'

const isFutureGig = (gig) => {
  var today = new Date()
  today.setHours(0, 0, 0, 0)

  return gig.when >= today
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

        <section id="showreel">
          <header className="major">
            <h2>Show Reel</h2>
          </header>
          <p>Here are a selection of tracks featuring me on bass.</p>
          <iframe
            title="Spotify Show Reel Playlist"
            src="https://open.spotify.com/embed/playlist/1XIx3SyTsEBH0Ur4MmiMMZ"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <br />
          <br />

          <ul className="actions">
            <li>
              <a href="credits" className="button">
                Full Credits
              </a>
            </li>
          </ul>
        </section>

        <section id="gigs">
          <GigList title="Upcoming Gigs" gigs={Gigs.filter(isFutureGig)} />

          <ul className="actions">
            <li>
              <a href="gigs" className="button">
                All gigs
              </a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Get In Touch</h2>
          <p>Feel free to email me or use this handy form.</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/message-received"
                enctype="application/x-www-form-urlencoded"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="row uniform 100%">
                  <div className="12u 12u$(xsmall)">
                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </label>
                  </div>
                  <div className="12u">
                    <label>
                      Message
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </label>
                  </div>
                </div>
                <br />
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:matthewcanty@gmail.com">
                    matthewcanty@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default HomeIndex
