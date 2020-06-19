import React from 'react';
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Features from './Features'
import Numbers from './Numbers'
import Pricing from './Pricing'
import Team from './Team'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'


class App extends React.Component {
  render() {
    return (
      <div classNameName="App">
        <header id="home">
          <div
            className="bg-img"
            style={{ backgroundImage: "url('./img/background3.jpg')" }}>
            <div className="overlay"></div>
          </div>
          <nav id="nav" className="navbar nav-transparent">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <a href="index.html">
                    <img className="logo" src="img/logo.png" alt="logo" />
                    <img
                      className="logo-alt"
                      src="img/logo-alt.png"
                      alt="logo"
                    />
                  </a>
                </div>

                <div className="nav-collapse">
                  <span></span>
                </div>
              </div>

              <ul className="main-nav nav navbar-nav navbar-right">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#pricing">Prices</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li className="has-dropdown">
                  <a href="#blog">Blog</a>
                  <ul className="dropdown">
                    <li>
                      <a href="blog-single.html">blog post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="home-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="home-content">
                    <h1 className="white-text">We Are Creative Agency</h1>
                    <p className="white-text">
                      Morbi mattis felis at nunc. Duis viverra diam non justo.
                      In nisl. Nullam sit amet magna in magna gravida vehicula.
                      Mauris tincidunt sem sed arcu. Nunc posuere.
                    </p>
                    <button className="white-btn">Get Started!</button>
                    <button className="main-btn">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <About />
        <Portfolio />
        <Services />
        <Features />
        <Numbers />
        <Pricing />
        <Team />
        <Blog />
        <Contact />
        <Footer />

        <div id="back-to-top"></div>

        <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
