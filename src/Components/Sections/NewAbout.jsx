import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './NewAbout.css';
import { Parallax } from "react-parallax";
import PortPic from '../../Resources/Resized.PNG';
import BYUID from '../../Resources/Logos/BYUIdaho.png';
import UtahSeal from '../../Resources/Logos/UtahSeal.png';
import Uvu from '../../Resources/Logos/UVU.png';
import devMtn from '../../Resources/Logos/devLogo.png';
import bbw from '../../Resources/Logos/bbwlogo.png';
import gt from '../../Resources/Logos/GideonTaylorAbbreviated.jpg'
import redSky from '../../Resources/Logos/RedSkyEngineeringLogoWide.webp';
import acbl from '../../Resources/Logos/ACBLLogo.png';
import fuzzyBack from '../../Resources/Cloudy.webp';

function NewAbout() {

    return (
        <div className={css(styles.mainArea)}>
            <Parallax className={'aboutMain'} blur={1} bgImage={fuzzyBack} bgImageAlt="the cat" strength={300}>
            <a href='/' name={'aboutSection'} style={{visibility: 'hidden'}}>Hidden</a>
            <h1 className={css(styles.bigFont, styles.underline)}>About</h1>
            <img src={PortPic} alt={'JonathanBaxter'} className={css(styles.imageSize)} />
            <div className={css(styles.infoContainer)}>
                <div style={{ marginLeft: '30px', marginRight: '30px', fontSize: '20px' }}>
                    <p>
                        I'm a jack of all trades Software Developer/Engineer. I have been actively working
                        in the industry since 2018. Before embarking into development I spent years learning
                        various coding languages and best practices with
                        courses taken at DevMountain, UVU, as well attained from personal research and growth.
                    </p>
                    <p>
                        With each job I have had the opportunity to expand my knowledge base. I started out with
                        a solid backbone of developing with Javascript, Python, React, Redux, HTML, CSS and ExpressJS.
                        Since then my knowledge has grown to include TypeScript, Python, PHP, Laravel, C#, .NET Support
                        and much more.
                    </p>
                    <br></br>
                    <p>
                        I value being a life long learner by continuously boosting my knowledge with the latest best practices
                        that are introduced to the world of development.
                    </p>
                </div>
            </div>
            </Parallax>
            <Parallax
                className={'parrallaxArea'}
                blur={{ min: -15, max: 15 }}
                bgImage={require('../../Resources/The_Verge_Cubeometry_Wallpaper_Landscape.0.png')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className={'workContainerTitle'}>
                    <h3 className={css(styles.midFont, styles.underline, styles.centerText)}>Work History</h3>
                </div>

                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.acbl.org'} target={'_blank'}>
                                <img src={acbl} alt={'ACBL'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1 className={'centered'}>American Contract Bridge League (ACBL)</h1>
                            <h3>May 2023 - Present</h3>
                            <p>American Contract Bridge League, is an entertainment organization that hosts and sponsors games throughout the world
                                for the card game of bridge. What makes them unique in serving their members is hosting events and awarding masterpoints
                                to players whom score these while playing a bridge tournament sanctioned by them. Their primary tool that they maintain
                                for their members is my.acbl.org which features members a way to monitor their membership status, get access to exclusive
                                benefits, and track their masterpoint progression to their next ranks. They offer a variety of different applications that
                                are maintained by the developers for members to utilize.</p>

                            <h3>Roles</h3>
                            <p>Software Developer</p>

                            <h3>Company Tech Stack</h3>
                            <p>PHP, Laravel, Zend, Python, Vue, React, Javascript, Typescript, mySQL, Postgresql and more</p>

                            <h2>Work Projects</h2>
                            <p>my.acbl.org - PHP / Laravel site</p>
                            <p>web3 - PHP / Zend site</p>
                            <p>Entry Express - TypeScript / ReactJS/ GraphQL Apollo Server</p>

                        </div>
                    </div>
                </div>
                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.redskyeng.com'} target={'_blank'}>
                                <img src={redSky} alt={'RedSky'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1 className={'centered'}>Red Sky Engineering</h1>
                            <h3>January 2022 - February 2023</h3>
                            <p>Red Sky Engineering is a sub company of the Red Sky Technology Company. The engineering department mostly focuses on contract
                                work. While there, their goal was efficiency and reliability of estimates. The company prides itself with it's investigation
                                and project scope phase which they focus on giving the client all the details of the project mapped out before giving an estimate.
                                Unlike other dev shops they focus on giving a flat estimate if they can if the project is deemed to stay in scope to benefit the
                                client and company.</p>
                            <p>Along with developing software for contract, they also focused on internal projects such as their own version of GraphQL but utilizing
                            the REST model. I helped assist in developing this application. I also assisted in building the new Red Sky Framework.</p>

                            <h3>Roles</h3>
                            <p>Full Stack Developer</p>
                            <p>Software Engineer</p>

                            <h3>Company Tech Stack</h3>
                            <p>React, Javascript, Typescript, C#</p>

                            <h2>Work Projects</h2>
                            <p>Rentyl Resorts - TypeScript / React / Redis / ExpressJS / HTML / CS</p>
                            <p>Mixhers App Store App - TypeScript / React / Redis / ExpressJS / HTML / CS</p>
                            <p>Imsar's Flight Tracker - TypeScript / React / Redis / ExpressJS / HTML / CS</p>
                            <p>Red Sky Framework - TypeScript / React / Redis / ExpressJS / HTML / CSS</p>
                            <p>Modere's Elastic Search - C# / .NET / Visual Studio / HTML / CSS</p>
                            <p>Green Compass Global - C# / .NET / Visual Studio/ HTML / CSS</p>
                        </div>
                    </div>
                </div>
                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://gideontaylor.com/'} target={'_blank'}>
                                <img src={gt} alt={'GideonTaylor'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1 className={'centered'}>Gideon Taylor Consulting LLC</h1>
                            <h3>May 2020 - January 2022</h3>
                            <p>Gideon Taylor Consulting is a consulting developer shop with a focus on Oracle's PeopleSoft Software.
                                Through CSS and PeopleCode, GT created the GT EForms form builder software. These eForms make it simple
                                for the clients who purchase the licensing to create an electronic form that can be used for a variety of
                                reasons, ranging from surveys to agreement forms to establish user consent etc. The possibility of user
                                adaption is endless since there is a way to insert custom code to program virtually whatever you want into
                                the forms.</p>
                            <p>Since 2021, GT has expanded it's business with acquisitions of Newbury Enterprises and Intrasee. Both of these
                                companies add more value to the GT portfolio by including programmable chatbots and more from their skills on their
                                teams.</p>
                            <h3>Roles</h3>
                            <p>Technical Analyst</p>
                            <h3>Company Tech Stack</h3>
                            <p>Oracle,PeopleSoft, PeopleCode, HTML, CSS</p>

                            <h3>Work Projects</h3>
                            <p>GT EForms</p>
                            <p>GT EForms V3.5 (Project Helium - Speeding up the eForms processing power.)</p>
                            <p>Version Control of the EForms framework.</p>
                        </div>
                    </div>
                </div>
                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.brightbridgeweb.com/'} target={'_blank'} >
                                <img src={bbw} alt={'BrightBridgeWeib'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1 className={'centered'}>Bright Bridge Web LLC</h1>
                            <h3>December 2018 - March 2020</h3>
                            <p>Bright Bridge Web is a small startup dev shop that focuses on Python / Django websites mostly. While there, the
                                company expanded to other tech such as ReactJS and PHP. Due to the size of the team, there was a lot of research
                                to be had and multiple roles as the company employed mostly new talent.</p>
                            <p>During my tenure, I was asked wear multiple hats from chief of staff, a developer and as project manager as well.</p>

                            <h3>Roles</h3>
                            <p>Full Stack Developer</p>
                            <p>Python / Django Developer</p>
                            <p>Lead Developer</p>
                            <p>Office Chief of Staff (Put in charge of assigning workloads to developers and was part of the leadership team for last 6 months of employment)</p>

                            <h3>Company Tech Stack</h3>
                            <p>Python, Django, React, Javascript, HTML, CSS</p>

                            <h3>Work Projects</h3>
                            <p>Scripture Notes - React / JavaScript / Postgresql</p>
                            <p>Achieve Today - PHP</p>
                            <p>Compliance Go - React / JavaScript / React Konva / Canvas HTML</p>

                        </div>
                    </div>
                </div>
                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.usdc.utah.gov/'} target={'_blank'} >
                                <img src={UtahSeal} alt={'UtahSeal'} className={'imageSize'} />
                            </a>
                    </div>
                        <div className={css(styles.spaced)}>
                            <h1 className={'centered'}>State of Utah</h1>
                            <h3>2011-2020</h3>
                            <p>Prior to my work in the tech industry, I worked for the State of Utah working with a variety of clients in
                                the Department of Human Services. This grew my skills with communicating with clients of successes and being
                                able to taper expectations when things did not always go according to plan.</p>
                            <p>After 2 years of working as a caregiver, I was promoted to a leadership role of Program Lead which gave me skills
                                in regulating a team 6 people as well as scheduling their work so that our clients would always have the care they needed.
                                This allowed me to see how a business operates as well as taking a lead role in decision making.</p>
                            <p>I still utilize these skills throughout any role I serve in any position.</p>
                            <h3>Roles: Caregiver, Program Lead</h3>
                        </div>
                    </div>
                </div>

                <div className={'workContainerTitle'}>
                    <h3 className={css(styles.midFont, styles.underline, styles.centerText)}>Education</h3>
                </div>

                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.byui.edu/'} target={'_blank'} >
                                <img src={BYUID} alt={'BYUI'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1>Brigham Young University Idaho - BYUI</h1>
                            <p>2008-2011</p>
                            <p>Earned the Degree: Bachelors of Science in Sociology</p>
                            <p>This time period I truly was able to hone in on interpersonal skills as well as identifying the
                                needs of clients by studying human interaction and conduct experiments through surveys etc.</p>
                        </div>
                    </div>
                </div>

                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://www.uvu.edu/'} target={'_blank'} >
                                <img src={Uvu} alt={'UVU'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1>Utah Valley University</h1>
                            <h3>2012-2018</h3>
                            <h4>Studying Coursework in the Computer Science Department</h4>
                            <p>Major start to my technical skill training taking courses in a variety of different coding
                                languages: C#, C++, Java, JavaScript. Also took a variety of courses studying topics of network architecture,
                                machine language, linux system management with shell scripting, etc.</p>
                        </div>
                    </div>
                </div>

                <div className={'workContainer'}>
                    <div className={css(styles.infoContainerUpAndDown)}>
                        <div className={'imageContainer'}>
                            <a href={'https://devmountain.com/'} target={'_blank'} >
                                <img src={devMtn} alt={'DevMountain'} className={'imageSize'} />
                            </a>
                        </div>
                        <div className={css(styles.spaced)}>
                            <h1>DevMountain</h1>
                            <h3>April 2018 - July 2018</h3>
                            <h4>Full Time Course Study in JavaScript Web Development</h4>
                            <p>DevMountain is a school that thrives on life long learning and personal success of their students.
                                The focus is the more you put in, the more you get out. I quit my job that I had for years to dedicate
                                my focus to the trade of development. While at DevMountain, they gave us the opportunity to create a personal
                                project combining all our knowledge together in something that we wanted to code as well as a group project where
                                we learned to work with others as a team.</p>
                            <p>The building blocks of being full stack was learned here from learning how to interact with SQL, frontend, backend, server management
                                and more.</p>
                        </div>
                    </div>
                </div>

            </Parallax>
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
    infoContainerUpAndDown: {
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'space-evenly',
        fontSize: '20px',
    },
    spaced: {
      margin: '32px',
    },
});