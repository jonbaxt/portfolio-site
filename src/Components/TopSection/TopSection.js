import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import city from '../../Resources/CityAtNight.jpg';
import backgroundVideo from '../../Resources/BackgroundVideos/SoftSlowMotionSideBySide.mp4';

export default function TopSection() {

    return (
        <div className={css(styles.main)}>
            <div style={{position: 'absolute', zIndex: 1000, top: 0}}>
                <a href='/' name={'introSection'} style={{visibility: 'hidden'}}>Hidden</a>
                <div className={css(styles.main)}>
                    <h1 className={css(styles.bigFont)}>Jonathan Baxter</h1>

                    <h1 className={css(styles.lessBig, styles.gapBetween)}>Software & Web</h1>
                    <h1 className={css(styles.lessBig, styles.gapBetween)}>Development</h1>
                </div>
            </div>
        <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" style={{width: '100%', zIndex: -1}}>
            <source src={backgroundVideo} type="video/mp4" style={{zIndex: -1}} />

        </video>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigFont: {
        zIndex: '10',
        fontSize: '100px',
        '@media(max-width: 850px)': {
            fontSize: '80px',
        },
        '@media(max-width: 690px)': {
            fontSize: '60px',
        },
        '@media(max-width: 520px)': {
            fontSize: '40px',
        },
        '@media(max-width: 340px)': {
            fontSize: '25px',
        },
    },
    lessBig: {
        zIndex: '10',
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
    gapBetween: {
        marginTop: '70px',
    },
    outer: {
        backgroundImage: `url(${city})`,
        backgroundSize: '100vw',
    }
});