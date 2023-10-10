import React from 'react';
import { css } from 'aphrodite';

import { invLink, invText1, invText2, invText3, technologiesIntroText, technologiesUsed, vid1Intro, vidLink1, vid2Intro, vidLink2, vid2Outro } from './InventoryText';
import HomeScreenPic from '../../../../Resources/invWarehouse/ScreenShotHomeScreenpng.png'
import {projectStyles} from "../ProjectStyles";

export default function InventoryWarehouse() {

    return (
        <div className={css(projectStyles.main)}>
            <div className={css(projectStyles.container)}>
                <h1 className={css(projectStyles.headerWords, projectStyles.underline)}>The Inventory Warehouse</h1>
                <a className={css(projectStyles.linkLine)} href={invLink()} target='_blank' ><p className={css(projectStyles.linkStyle)}>Live Site Link</p></a>

                <div className={css(projectStyles.picContainer)}>
                    <img
                        // className={css(styles.picSizing)} 
                        className={css(projectStyles.smallSized)}
                        src={HomeScreenPic} alt='' />
                </div>

                <p className={css(projectStyles.paragraphs)}>{invText1()}</p>
                <p className={css(projectStyles.paragraphs)}>{invText2()}</p>
                <p className={css(projectStyles.paragraphs)}>{invText3()}</p>

                <p className={css(projectStyles.technologiesHeader)}>{technologiesIntroText()}</p>
                <p className={css(projectStyles.technologiesList)}>{technologiesUsed()}</p>




                <h4 className={css(projectStyles.vidTextTop, projectStyles.marginSides)}>{vid1Intro()}</h4>
                <div className={css(projectStyles.vidContainer, projectStyles.marginBottomMore)}>
                    <iframe
                        className={css(projectStyles.videoDimensions)}
                        src={vidLink1()}
                        id="videoStyle"
                        title='Inventory Warehouse Home Screen' frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen></iframe>
                </div>
                <h4 className={css(projectStyles.vidTextTop, projectStyles.marginSides)}>{vid2Intro()}</h4>
                <div className={css(projectStyles.vidContainer, projectStyles.marginBottomMore)}>
                    <iframe
                        className={css(projectStyles.videoDimensions)}
                        src={vidLink2()}
                        id="videoStyle"
                        title='Inventory Warehouse Clients Page'
                        frameborder="0"
                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <h4 className={css(projectStyles.vidTextTop, projectStyles.marginSides)}>{vid2Outro()}</h4>

            </div>
        </div>
    )
}