import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
              <a
                href="mailto:matthewcanty@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li> */}
          </ul>
          <ul className="copyright">
            {/* <li>&copy; Matt Canty</li>
            <li>
              I am a software developer too <br />
              and made this site myself with a <br />
              little help from <a href="http://html5up.net">HTML5 UP</a>
            </li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
