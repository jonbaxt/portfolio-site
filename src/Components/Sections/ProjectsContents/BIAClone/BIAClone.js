import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { BIAText1, BIAText2, BIAText3, BIATechHead, BIATechUsed, BIAVidHead, BIAContributionHead, BIAContributeBullet1, BIAContributeBullet2, BIAContributeBullet3, BIAContributeBullet4, BIAContributeBullet5, BIALiveSiteLink } from './BIAText';
import { projectStyles } from "../ProjectStyles";

function BIAClone() {
    return (
        <div className={css(projectStyles.main)}>
            <div className={css(projectStyles.container)} >
                <h1 className={css(projectStyles.headerWords, projectStyles.underline)}>Build In Amsterdam Clone</h1>
{/*                <a className={css(projectStyles.linkLine)} href={BIALiveSiteLink()} target='_blank'><p className={css(styles.linkStyle)}>Live Site Link</p></a>*/}

                <p className={css(projectStyles.paragraphs)}>{BIAText1()}</p>
                <p className={css(projectStyles.paragraphs)}>{BIAText2()}</p>
                <p className={css(projectStyles.paragraphs)}>{BIAText3()}</p>

                <p className={css(projectStyles.technologiesHeader)}>{BIATechHead()}</p>
                <p className={css(projectStyles.technologiesList)}>{BIATechUsed()}</p>

                <h4 className={css(projectStyles.vidTextTop)}>{BIAVidHead()}</h4>
                <div className={css(projectStyles.vidContainer)}>
                    <iframe
                        className={css(projectStyles.videoDimensions)}
                        src="https://www.youtube.com/embed/niJ5m1T6hrQ"
                        id="videoStyle"
                        title='BIA'
                        frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
                <p className={css(projectStyles.listHeader)}>{BIAContributionHead()}</p>
                <ul className={css(projectStyles.listContainer)} >
                    <li className={css(projectStyles.listItem)}>{BIAContributeBullet1()}</li>
                    <li className={css(projectStyles.listItem)}>{BIAContributeBullet2()}</li>
                    <li className={css(projectStyles.listItem)}>{BIAContributeBullet3()}</li>
                    <li className={css(projectStyles.listItem)}>{BIAContributeBullet4()}</li>
                    <li className={css(projectStyles.listItem)}>{BIAContributeBullet5()}</li>
                </ul>
            </div>
        </div>
    )
}

export default BIAClone;