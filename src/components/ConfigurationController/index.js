import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onToggleContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onToggleLeft = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onToggleRight = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-con">
          <h1 className="layout-head">Layout</h1>
          <div className="inputs-container">
            <div className="option">
              <input
                type="checkbox"
                id="content"
                className="check"
                onChange={onToggleContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="option">
              <input
                type="checkbox"
                id="left"
                className="check"
                onChange={onToggleLeft}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="option">
              <input
                type="checkbox"
                id="right"
                className="check"
                onChange={onToggleRight}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
