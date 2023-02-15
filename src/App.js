
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import "animate.css/animate.min.css";

import TopSection from './Components/TopSection/TopSection';
import NewAbout from './Components/Sections/NewAbout';
// import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className={css(styles.universalStyling)}>
          <div className={css(styles.navMain)}>
            <a className={css(styles.linkStyled)} href='#introSection'>Jonathan Baxter</a>
            <div>
              <a className={css(styles.linkStyled)} href='#aboutSection'>About</a>

              <a className={css(styles.linkStyled)} href='#skillsSection'>Skills</a>

              <a className={css(styles.linkStyled)} href='#projectsSection'>Projects</a>

              <a className={css(styles.linkStyled)} href='#contactSection'>Contact</a>

            </div>
          </div>
          <TopSection />
          <NewAbout />
          {/* <About /> */}
          <Skills />
          <Projects />


          <Contact />
        </div>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  universalStyling: {
    fontFamily: 'Viaoda Libre, cursive',
    color: 'white',
    textShadow: '1px 1px 2px black',
  },
  navMain: {
    zIndex: '11',
    position: 'fixed',
    width: '100%',
    height: '40px',
    background: 'rgb(178,34,34)',
    boxShadow: '1px 1px 2px gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkStyled: {
    textDecorationLine: 'none',
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px',
  }
});