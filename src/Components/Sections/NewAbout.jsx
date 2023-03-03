import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import PortPic from '../../Resources/Resized.PNG';
import BYUID from '../../Resources/Logos/BYUIdaho.png';
import UtahSeal from '../../Resources/Logos/UtahSeal.png';
import Uvu from '../../Resources/Logos/UVU.png';
import devMtn from '../../Resources/Logos/devLogo.png';
import bbw from '../../Resources/Logos/bbwlogo.png';
import gt from '../../Resources/Logos/GideonTaylorAbbreviated.jpg'
import redSky from '../../Resources/Logos/RedSkyEngineeringLogoWide.webp';


function NewAbout() {

    return (
        <div className={css(styles.mainArea)}>
            <a href='/' name={'aboutSection'} style={{visibility: 'hidden'}}>Hidden</a>
            <h1 className={css(styles.bigFont, styles.underline)}>About</h1>
            <img src={PortPic} alt={'JonathanBaxter'} className={css(styles.imageSize)} />
            <div className={css(styles.infoContainer)}>
                <div style={{ marginLeft: '30px', marginRight: '30px', fontSize: '20px' }}>
                    <div className={css(styles.infoContainerWithPadding)} >
                        <img src={BYUID} alt='BYUIdahoPhoto' className={css(styles.imageSize2)} />
                        <img src={Uvu} alt='UVUPhoto' className={css(styles.imageSize2)} />
                        <img src={devMtn} alt='DevMountPhoto' className={css(styles.imageSize2)} />
                    </div>
                    <p>I'm a Web/Software Developer specializing in Javascript, Python, React, HTML, CSS and many other languages and frameworks based off courses taken at DevMountain, UVU and knowledge I've attained while working with technology.</p>
                    <br></br>
                    <p>My work ethic and dedication to delivering quality comes from a unique background of skills I acquired prior to entering into Development. I worked with the State of Utah in the department of human services using my Bachelors of Science in Sociology from BYU-Idaho, which helped me learn skills in customer care and team building skills.</p>
                    <br></br>
                    <p>I study coding independently and have taken courses from UVU and DevMountain to enhance my skills as a developer. I am always looking for ways to improve and gain new abilities and skills.</p>
                </div>
            </div>

                <h3 className={css(styles.midFont, styles.underline, styles.centerText)}>Work History</h3>
                <div className={css(styles.infoContainerCentered)}>
                    <img src={UtahSeal} alt={'UtahSeal'} className={css(styles.imageSize4)} />
                    <div className={css(styles.spaced)}>
                        <p>State of Utah</p>
                        <p>2011-2020</p>
                        <p>Roles: Caregiver, Program Lead</p>
                    </div>
                </div>
                <div className={css(styles.infoContainerCentered)}>
                    <img src={bbw} alt={'BrightBridgeWeib'} className={css(styles.imageSize4)} />
                    <div className={css(styles.spaced)}>
                        <p>Bright Bridge Web LLC</p>
                        <p>December 2018 - March 2020</p>
                        <p>Roles: Developer, Chief of Staff</p>
                        <p>Company Tech Stack: Python, Django, React, Javascript, HTML, CSS</p>
                    </div>
                </div>
                <div className={css(styles.infoContainerCentered)}>
                    <img src={gt} alt={'GideonTaylor'} className={css(styles.imageSize4)} />
                    <div className={css(styles.spaced)}>
                        <p>Gideon Taylor Consulting LLC</p>
                        <p>May 2020 - January 2022</p>
                        <p>Roles: Technical Analyst</p>
                        <p>Company Tech Stack: Oracle,PeopleSoft, PeopleCode, HTML, CSS</p>
                    </div>
                </div>
                <div className={css(styles.infoContainerCentered)}>
                    <img src={redSky} alt={'RedSky'} className={css(styles.imageSize3)} />
                    <div className={css(styles.spaced)}>
                        <p>Red Sky Technologies</p>
                        <p>January 2022 - February 2023</p>
                        <p>Roles: Caregiver, Program Lead</p>
                        <p>Company Tech Stack: React, Javascript, Typescript, C#</p>
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
    centerText: {
        textAlign: 'center',
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
        height: '60px'
    },
    topSpace: {
        marginTop: '10px',
    },
    imageSize: {
        width: '30%',
    },
    imageSize2: {
        width: '100px',
    },
    imageSize3: {
        width: '320px',
    },
    imageSize4: {
      width: '10%',
        height: 'auto',
    },
    infoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    
    infoContainer2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    infoContainerWithPadding: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '64px',
    },
    infoContainerCentered: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '20px',
    },
    spaced: {
      margin: '32px',
    },
});