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
            <li>
              <a href="https://github.com/mattcanty/mattcanty.com">
                Edit on Github
              </a>
            </li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>.
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
