import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

import PortPic from '../../Resources/Resized.PNG';
import BYUID from '../../Resources/Logos/BYUIdaho.png';
import UtahSeal from '../../Resources/Logos/UtahSeal.png';
import Uvu from '../../Resources/Logos/UVU.png';
import devMtn from '../../Resources/Logos/devLogo.png';
import bbw from '../../Resources/Logos/bbwlogo.png';
import gt from '../../Resources/Logos/GideonTaylorAbbreviated.jpg'


function NewAbout() {

    return (
        <div className={css(styles.mainArea)}>
            <ScrollableAnchor id={'aboutSection'}>
                <h1 className={css(styles.bigFont, styles.underline)}>About</h1>
            </ScrollableAnchor>
            <img src={PortPic} className={css(styles.imageSize)} />
            <div className={css(styles.infoContainer)}>
                <div style={{ marginLeft: '30px', marginRight: '30px', fontSize: '20px' }}>
                    <div className={css(styles.infoContainer2)} >
                        <img src={BYUID} className={css(styles.imageSize2)} />
                        <img src={Uvu} className={css(styles.imageSize2)} />
                        <img src={devMtn} className={css(styles.imageSize2)} />
                    </div>
                    <p>I'm a Web/Software Developer specializing in Javascript, Python, React, HTML, CSS and many other languages and frameworks based off courses taken at DevMountain, UVU and knowledge I've attained while working with technology.</p>
                    <br></br>
                    <p>My work ethic and dedication to delivering quality comes from a unique background of skills I acquired prior to entering into Development. I worked with the State of Utah in the department of human services using my Bachelors of Science in Sociology from BYU-Idaho, which helped me learn skills in customer care and team building skills.</p>
                    <br></br>
                    <p>I study coding independently and have taken courses from UVU and DevMountain to enhance my skills as a developer. I am always looking for ways to improve and gain new abilities and skills.</p>
                    <div className={css(styles.infoContainer2)} >
                        <img src={UtahSeal} className={css(styles.imageSize2)} />
                        <img src={bbw} className={css(styles.imageSize2)} />
                        <img src={gt} className={css(styles.imageSize2)} />
                    </div>
                </div>
            </div>

            {/* <h2 className={css(styles.midFont, styles.topSpace)}>Timeline</h2> */}
            {/* <div className={css(styles.timelineLeftSide)}> */}
            {/* 
            <h3 className={css(styles.smallFont)}>2008-2011 - BYU-Idaho Bachelors of Science in Sociology</h3>
            <div className={css(styles.line)}></div>
            <h3 className={css(styles.smallFont)}>2012-2019 - State of Utah Department of Human Services</h3>
            <div className={css(styles.line)}></div>
            <h3 className={css(styles.smallFont)}>2012-2018 - Utah Valley University Studies Focusing on Computer Science</h3>
            <div className={css(styles.line)}></div>
            <h3 className={css(styles.smallFont)}>2018 - DevMountain Developers Coding Bootcamp, JavaScript Development</h3>
            <div className={css(styles.line)}></div>
            <h3 className={css(styles.smallFont)}>December 2018-March 2020 Bright Bridge Web LLC</h3>
            <div className={css(styles.line)}></div>
            <h3 className={css(styles.smallFont)}>May 2020-Present - Gideon Taylor Consulting</h3>
             */}
            {/* <div className={css(styles.line)}></div> */}
            {/* </div> */}

        </div>
    )
}

export default NewAbout;

const styles = StyleSheet.create({
    mainArea: {
        width: '100%',
        color: 'black',
        textShadow: '1px 1px 2px grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigFont: {
        // zIndex: '10',
        fontSize: '120px',
        '@media(max-width: 850px)': {
            fontSize: '100px',
        },
        '@media(max-width: 690px)': {
            fontSize: '80px',
        },
        '@media(max-width: 520px)': {
            fontSize: '40px',
        },
        '@media(max-width: 340px)': {
            fontSize: '30px',
        },
    },
    midFont: {
        // zIndex: '10',
        fontSize: '60px',
        '@media(max-width: 850px)': {
            fontSize: '40px',
        },
        '@media(max-width: 690px)': {
            fontSize: '30px',
        },
        '@media(max-width: 520px)': {
            fontSize: '20px',
        },
        '@media(max-width: 340px)': {
            fontSize: '10px',
        },
    },
    smallFont: {
        // zIndex: '10',
        fontSize: '23px',
        '@media(max-width: 850px)': {
            fontSize: '20px',
        },
        '@media(max-width: 690px)': {
            fontSize: '16px',
        },
        '@media(max-width: 520px)': {
            fontSize: '14px',
        },
        '@media(max-width: 340px)': {
            fontSize: '10px',
        },
    },
    underline: {
        textDecorationLine: 'underline',
    },
    timelineLeftSide: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'left',
        border: '1px solid black',
        width: '80%',


    },
    line: {
        background: 'black',
        width: '2px',
        height: '60px',
        // marginLeft: '220px',
    },
    topSpace: {
        marginTop: '10px',
    },
    imageSize: {
        width: '30%',
    },
    imageSize2: {
        width: '100px',
        // marginLeft: '80px',
        // marginRight: '80px',
    },
    infoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // border: '1px solid black',
    },
    
    infoContainer2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // border: '1px solid black',
    }
});