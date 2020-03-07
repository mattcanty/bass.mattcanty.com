import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <ul className="copyright">
          <li>
            Website built and maintained{' '}
            <a href="https://github.com/mattcanty/mattcanty.com">by me.</a>
          </li>
          <li>
            Big thanks to <a href="http://html5up.net">HTML5 UP</a> for the
            website's template.
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
