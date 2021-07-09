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
            <h2>Bass Transcriptions</h2>

            <h3>In My Life - The Beatles - Harpsichord Solo</h3>
            <p>
              <iframe
                src="https://flat.io/embed/5e622846e7841d5678c2ee24?controlsPosition=top&sharingKey=9a09f77fc25d5b127467969878914887971cac85af097130ddaa671fb2a59341c41aa2febe6d2ab3d298c0bb1b909a9d1893c7757cdfd9d3a02248efb162c16e"
                height="207"
                width="100%"
                frameBorder="0"
                allowfullscreen
                allow="midi"
              ></iframe>
            </p>

            <h3>House of Fun - Madness</h3>
            <p>
              <iframe
                src="https://flat.io/embed/55c8b796ad57a18b6a814e13?layout=page&controlsPosition=top&sharingKey=e9cd194a02b8ef62a406e4520cad52b076bbce1366b7ac5348e67339c2c534bd0c334b4f794f342ea509fb9d570a9d6ba4ec8c616148bbd76182cc14d2e72bff"
                height="450"
                width="100%"
                frameBorder="0"
                allowfullscreen
                allow="midi"
              ></iframe>
            </p>
          </section>
          <section id="two">
            <h2>Bass Exercises</h2>
            <p></p>
          </section>
          <section id="three">
            <h2>Guitar Exercises</h2>
            <p></p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default MessageReceivedPage
