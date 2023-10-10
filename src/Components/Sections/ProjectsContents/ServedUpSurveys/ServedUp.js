import React from 'react';
import { css } from 'aphrodite';

import { servedUp1, servedUp2, servedUp3, technologiesIntroText, technologiesUsed, videoIntro, videoIntro2 } from './ServedUpText';
import {projectStyles} from "../ProjectStyles";

function ServedUp() {

    return (
        <div className={css(projectStyles.main)}>
            <div className={css(projectStyles.container)}>
                <h1 className={css(projectStyles.headerWords, projectStyles.underline)}>Served Up Surveys</h1>
{/*                <a className={css(projectStyles.linkLine)} href={liveSiteLink()} target='_blank' ><p className={css(styles.linkStyle)}>Live Site Link</p></a>*/}

                <p className={css(projectStyles.paragraphs)}>{servedUp1()}</p>
                <p className={css(projectStyles.paragraphs)}>{servedUp2()}</p>
                <p className={css(projectStyles.paragraphs)}>{servedUp3()}</p>

                <p className={css(projectStyles.technologiesHeader)}>{technologiesIntroText()}</p>
                <p className={css(projectStyles.technologiesList)}>{technologiesUsed()}</p>

                <h4 className={css(projectStyles.vidTextTop)}>{videoIntro()}</h4>
                <div className={css(projectStyles.vidContainer)}>
                    <iframe
                        className={css(projectStyles.videoDimensions)}
                        src="https://www.youtube.com/embed/cT3LC5uyNrA"
                        id="videoStyle"
                        title='Served up walkthrough' frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen></iframe>
                </div>
                <h4 className={css(projectStyles.vidTextTop)}>{videoIntro2()}</h4>
                <div className={css(projectStyles.vidContainer)}>
                    <iframe
                        className={css(projectStyles.videoDimensions)}
                        src="https://www.youtube.com/embed/mXc97QEu92M"
                        id="videoStyle"
                        title='Graphs and others'
                        frameborder="0"
                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default ServedUp;