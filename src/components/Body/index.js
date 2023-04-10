import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="left-nav-bar">
              <h1 className="heads">Left Navbar Menu</h1>
              <ul className="list-items">
                <li>
                  <p className="items">item 1</p>
                </li>
                <li>
                  <p className="items">item 2</p>
                </li>
                <li>
                  <p className="items">item 3</p>
                </li>
                <li>
                  <p className="items">item 4</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="heads">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-nav-bar">
              <h1 className="heads">Right Navbar Menu</h1>
              <div className="can">
                <p>Ad 1</p>
              </div>
              <div className="can">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
