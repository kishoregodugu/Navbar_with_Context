// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="main-about-container">
              <Navbar />
              <div className="about-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about-img"
                  className="about-img"
                />
                <h1 className="about-heading-light">About</h1>
              </div>
            </div>
          ) : (
            <div className="main-about-container">
              <Navbar />
              <div className="about-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about-img"
                  className="about-img"
                />
                <h1 className="about-heading-dark">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
