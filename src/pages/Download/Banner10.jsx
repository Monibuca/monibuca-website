import React from 'react'
class Banner extends React.PureComponent {
  render() {
    return (
      <div className="banner10-wrap">
        <div className="banner10 home-page-wrapper">
          <div className="content home-page">
            <div className="title">Download</div>
            <div className="desc">
              Download according to the required system version. If you wish to deploy using Docker, please check the command on the homepage.
              <span className="version">The downloaded archive contains pre-compiled binary files that can be run directly.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
