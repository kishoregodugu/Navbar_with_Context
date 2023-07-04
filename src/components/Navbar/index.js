// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <nav className="nav-bar-container-light">
              <Link to="/" className="nav-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </Link>
              <ul className="list-items">
                <li className="list-item">
                  <Link to="/" className="nav-light">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="nav-light">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-img"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-bar-container-dark">
              <Link to="/" className="nav-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </Link>
              <ul className="list-items">
                <li className="list-item">
                  <Link to="/" className="nav-dark">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="nav-dark">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                className="theme-button"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-img"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
