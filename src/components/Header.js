import React from 'react'

import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>
              Matt Canty, a musician from <br />
              London (UK)
            </strong>
          </h1>
          <p>
            A bassist and guitarist with <br />
            over 15 years' experience <br />
            gigging, touring &amp; recording.
          </p>
          <p>
            Familiar with the classic styles <br />
            of blues, rock, pop and folk.
          </p>
        </div>
      </header>
    )
  }
}

export default Header
