import PropTypes from 'prop-types'
import React, { Component } from 'react'

class GigList extends Component {
  constructor() {
    super()
  }
  renderGigList(title, gigs) {
    if (gigs.length === 0) {
      return 'No upcoming gigs.'
    }

    const gigList = gigs.map((obj) => {
      return (
        <tr>
          <td>{obj.when.toLocaleDateString()}</td>
          <td>
            <a target="_blank" href={obj.whoLink}>
              {obj.who}
            </a>
          </td>
          <td>
            <a target="_blank" href={obj.whereLink}>
              {obj.where}
            </a>
          </td>
          <td>
            <a target="_blank" href={obj.gigLink}>
              See more
            </a>
          </td>
        </tr>
      )
    })

    return (
      <div className="row">
        <header className="major">
          <h2>{title}</h2>
        </header>
        <table>
          <tbody>{gigList}</tbody>
        </table>
      </div>
    )
  }
  render() {
    const { title, gigs } = this.props

    return (
      <div>
        {this.renderGigList(
          title,
          gigs.sort((a, b) => b.when - a.when)
        )}
      </div>
    )
  }
}

GigList.displayName = 'GigList'
GigList.propTypes = {
  title: PropTypes.string,
  gigs: PropTypes.array,
}

export default GigList
