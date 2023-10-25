import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Parallax } from "react-parallax";
import './Skills.css';
import html5 from '../../Resources/SkillsLogos/HTML5.png';
import css3 from '../../Resources/SkillsLogos/CSS3.png';
import es6 from '../../Resources/SkillsLogos/es6.png';
import bootstrap from '../../Resources/SkillsLogos/Bootstrap.png';
import chartjs from '../../Resources/SkillsLogos/Chartjs.png';
import js from '../../Resources/SkillsLogos/JSLogo.png';
import massive from '../../Resources/SkillsLogos/Massive.jpg';
import NodeJS from '../../Resources/SkillsLogos/NodejsLogo.png';
import Parralax from '../../Resources/SkillsLogos/parralax.png';
import passport from '../../Resources/SkillsLogos/passportJS.png';
import postgres from '../../Resources/SkillsLogos/postgresql-logo.png';
import ReactLogo from '../../Resources/SkillsLogos/ReactJS.png';
import ReduxLogo from '../../Resources/SkillsLogos/Redux.png';
import sass from '../../Resources/SkillsLogos/sass.png';
import slick from '../../Resources/SkillsLogos/slick.gif';
import vue from '../../Resources/SkillsLogos/VuejsLogo.png';
import herokulogo from '../../Resources/SkillsLogos/heroku-logo.jpg';
import pythonlogo from '../../Resources/SkillsLogos/python-alt.jpg';
import fuzzyBack from '../../Resources/Cloudy.webp';
import djangologo from '../../Resources/SkillsLogos/django-alt.png';
import typescriptLogo from '../../Resources/SkillsLogos/Typescript_logo.svg.png';
import mariaDb from '../../Resources/SkillsLogos/mariadb-logo-vert_blue-transparent.png';
import oracle from '../../Resources/SkillsLogos/oracle-symbol.jpg';
import peoplesoft from '../../Resources/SkillsLogos/oraclepeoplesoft.png';
import peoplecode from '../../Resources/SkillsLogos/peoplecode-logo.jpg';
import oracledb from '../../Resources/SkillsLogos/oracle-database-logo.png';
import aws from '../../Resources/SkillsLogos/Amazon_Web_Services_Logo.svg.png';
import digitalOcean from '../../Resources/SkillsLogos/DigitalOcean_logo.svg.png';
import laravel from '../../Resources/SkillsLogos/laravel-logo.png';
import php from '../../Resources/SkillsLogos/PHP-logo.svg.png';
import zend from '../../Resources/SkillsLogos/ZendFramework-logo.png';
import cPlus from '../../Resources/SkillsLogos/CPlusPlus.png';
import cSharp from '../../Resources/SkillsLogos/CSharpLogo.png';
import dotNet from '../../Resources/SkillsLogos/dotNet.png';
import vsLogo from '../../Resources/SkillsLogos/VisualStudioLogo.png'
import vsCodeLogo from '../../Resources/SkillsLogos/VisualStudioCodeLogo.png'
import mySql from '../../Resources/SkillsLogos/mysql.png';
import reactRecoil from '../../Resources/SkillsLogos/Recoil.png';

function Skills() {

    return (
        <Parallax className={css(styles.main)} blur={1} bgImage={fuzzyBack} bgImageAlt="the cat" strength={200}>
            <a href='/' name={'skillsSection'} style={{visibility: 'hidden'}}>Hidden</a>
            <h1 className={css(styles.bigFont, styles.under)}>Skills</h1>

            <div className={css(styles.rowed)} >

                <div className={css(styles.logoCont)}><img className={css(styles.smallerRes)} src={html5} alt='HTML5' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.smallerRes)} src={css3} alt='CSS3' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={es6} alt='ES6' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={js} alt='Javascript' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={typescriptLogo} alt='Typescript' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={pythonlogo} alt='python' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={php} alt='php' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={NodeJS} alt='nodejs' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={ReactLogo} alt='reactjs' /></div>
                <div className={'logoContainerWithText'}><img className={css(styles.smallerRes)} src={vue} alt='vuejs' />
                <h4>VueJS</h4></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={laravel} alt='laravel' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={zend} alt='zend' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={oracle} alt='oracle' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={peoplesoft} alt='peoplesoft' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={peoplecode} alt='peoplecode' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={sass} alt='sass' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={ReduxLogo} alt='redux' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={reactRecoil} alt='ReactRecoil' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={Parralax} alt='paralax' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.smallestRes)} src={chartjs} alt='chartjs' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={passport} alt='passport' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={herokulogo} alt='heroku' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={aws} alt='aws' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={mariaDb} alt='mariadb' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={postgres} alt='postgresql' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={mySql} alt='mysql' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={oracledb} alt='oracledb' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={djangologo} alt='django' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={slick} alt='slick' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={massive} alt='massive' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={bootstrap} alt='bootstrap' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={cPlus} alt='CPlusPlus' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={cSharp} alt='CSharp' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={dotNet} alt='dotNet' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={digitalOcean} alt='digital ocean' /></div>
                <div className={'logoContainerWithText'}><img className={css(styles.smallerRes)} src={vsCodeLogo} alt='vs code' />
                <h4>VS Code</h4></div>
                <div className={'logoContainerWithText'}><img className={css(styles.imgRes)} src={vsLogo} alt='vs' />
                <h4>Visual Studio</h4></div>
            </div>
            <div className={'bottomBlurbOnSkills'}>
                <h2>I'm a lifelong learner and this is just a sample of what I have done and is not a complete list. If you would like more info
                    on my current projects <a href={'/contact'}>contact me.</a></h2>
            </div>
        </Parallax>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        bigFont: {
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
        },textShadow: '1px 1px 2px grey',
    },
    bigFont: {
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
    under: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: '20px',
    },
    imgRes: {
        width: '80%',
    },
    smallerRes: {
        width: '60%',
    },
    smallestRes: {
        width: '55%',
    },
    logoCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        width: '200px',
        height: '200px',
        background: 'rgba(13,255,186,0.4)',
        boxShadow: '1px 1px 9px grey',
    },
    rowed: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
});

export default Skills;