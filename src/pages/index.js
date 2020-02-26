import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/time-elastic-cover.jpg'
import thumb02 from '../assets/images/thumbs/pendulum-swing-cover.jpg'
import thumb03 from '../assets/images/thumbs/dear-joy-cover.jpg'
import thumb04 from '../assets/images/thumbs/on-the-hop-cover.jpg'
import thumb05 from '../assets/images/thumbs/am-i-normal-yet-cover.jpg'
import thumb06 from '../assets/images/thumbs/in-the-echoshop-cover.jpg'
import thumb07 from '../assets/images/thumbs/beautiful-again-cover.jpg'

import full01 from '../assets/images/fulls/time-elastic-cover.jpg'
import full02 from '../assets/images/fulls/pendulum-swing-cover.jpg'
import full03 from '../assets/images/fulls/dear-joy-cover.jpg'
import full04 from '../assets/images/fulls/on-the-hop-cover.jpg'
import full05 from '../assets/images/fulls/am-i-normal-yet-cover.jpg'
import full06 from '../assets/images/fulls/in-the-echoshop-cover.jpg'
import full07 from '../assets/images/fulls/beautiful-again-cover.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Time Elastic - Laish',
    description: '2017 / Bass',
    linkTitle: 'Buy',
    linkTo: 'http://shop.talitres.com/products/609695-time-elastic',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Pendulum Swing - Laish',
    description: '2016 / Bass',
    linkTitle: 'Buy',
    linkTo: 'http://shop.talitres.com/products/576740-pendulum-swing',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Dear Joy - Dear Joy',
    description: '2013 / Bass',
    linkTitle: '?',
    linkTo: '#',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'On The Hop - Hows My Pop',
    description: '2010 / Bass',
    linkTitle: 'Listen on Spotify',
    linkTo: 'https://play.spotify.com/album/6BPfT1lTqithcXRByBXWEm',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Am I Normal Yet?? - Hows My Pop',
    description: '2008 / Bass',
    linkTitle: 'Listen on Spotify',
    linkTo: 'https://play.spotify.com/album/2Br7HOnVgonCf4uAQV5zNx',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'In The Echoshop - Hows My Pop',
    description: '200? / Bass',
    linkTitle: 'Listen on Spotify',
    linkTo: 'https://play.spotify.com/album/0vDkRqAWRV21ZtWXPoD4QF',
  },
  {
    id: '6',
    source: full07,
    thumbnail: thumb07,
    caption: 'Beautiful Again - HowdenJones',
    description: '2004 / Bass Track 14',
    linkTitle: 'Download for Free',
    linkTo:
      'https://www.musicglue.com/howdenjones/products/beautiful-again-2004-mp3-download',
  },
]

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

        <div id="main">
          <section id="one">
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
                  <td>26th January</td>
                  <td>DG Solaris</td>
                  <td>Paperdress Vintage</td>
                  <td>
                    <a href="">TBA</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  All gigs
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Credits</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  linkTitle,
                  linkTo,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  linkTitle,
                  linkTo,
                })
              )}
            />

            {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
          </section>

          <section id="three">
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
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
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
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
