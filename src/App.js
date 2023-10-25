import Route from './route.js';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import "animate.css/animate.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className={css(styles.universalStyling)}>
          <div className={css(styles.navMain)}>
            <a className={css(styles.linkStyled)} href='/'>Jonathan Baxter</a>
            <div>
              <a className={css(styles.linkStyled)} href='/about'>About</a>

              <a className={css(styles.linkStyled)} href='/skills'>Skills</a>

              <a className={css(styles.linkStyled)} href='/projects'>Projects</a>

              <a className={css(styles.linkStyled)} href='/contact'>Contact</a>

            </div>
          </div>
          <div>
            {Route}
          </div>
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