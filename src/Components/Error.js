import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import backgroundVideoError from '../Resources/BackgroundVideos/pexels-rostislav-uzunov-5680034.mp4';

export default function Error() {

    return (
        <div className={css(ErrorStyles.main)}>
            <div style={{position: 'absolute', zIndex: 1000, top: 0}}>
                <div style={{paddingTop: '64px'}}>
                    <h1 className={css(ErrorStyles.bigFont)}>Looking for Something?</h1>
                    <h6 className={css(ErrorStyles.bigFont)}>This path currently does not exist.</h6>
                    <a href='/'>Home</a>
                </div>
            </div>
            <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" style={{width: '100%', zIndex: -1}}>
                <source src={backgroundVideoError} type="video/mp4" style={{zIndex: -1}} />
            </video>
        </div>
    )
}

const ErrorStyles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-10',
    },
    bringToFront: {
        zIndex: '100',
    },
    middleBox: {
        background: 'rgba(13,255,186,0.4)',
        boxShadow: '1px 1px 9px grey',
        width: '90%',
        paddingBottom: '40px',
    },
    bigFont: {
        textAlign: 'center',
        fontSize: '80px',
        '@media(max-width: 850px)': {
            fontSize: '60px',
        },
        '@media(max-width: 690px)': {
            fontSize: '40px',
        },
        '@media(max-width: 520px)': {
            fontSize: '25px',
        },
        '@media(max-width: 340px)': {
            fontSize: '20px',
        },
    },
    fontColoring: {
        color: 'black',
        textShadow: '0.5px 0.5px 0px gray',
    },
    textFormat: {
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '28px',
        fontWeight: 'bold',
        '@media(max-width: 770px)': {
            fontSize: '25px',
        },
        '@media(max-width: 610px)': {
            fontSize: '20px',
        },
    },
    linksBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '60px',
    },
    linkSizing: {
        marginLeft: '60px',
        marginRight: '60px',
        cursor: 'pointer',
        color: 'black',
        // textShadow: '2px 2px 4px black',
        // boxShadow: '2px 2px 4px black',
        fontSize: '60px',
        ':hover': {
            color: 'darkgray',
        },
    },
    svg: {
        marginLeft: '60px',
        marginRight: '60px',
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        color: 'white',
        // fontSize: '60px',
        ':hover': {
            color: 'darkgray',
        },
    },
    svg2: {
        marginLeft: '60px',
        marginRight: '60px',
        width: '180px',
        height: '100px',
        cursor: 'pointer',
        color: 'white',
        // fontSize: '60px',
        ':hover': {
            color: 'darkgray',
        },
    },
});
