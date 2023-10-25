import React from 'react';
import { css } from 'aphrodite';
import '../ProjectComponents.css';
import { ParText1, ParText2, ParText3, ParText4, ParText5, ParTechHead, ParTechUsed
    // , ParSiteLink
} from './ParentalGamingText';
import ParGamPic1 from '../../../../Resources/ParGamRev/HomeScreen.PNG';
import ParGamPic2 from '../../../../Resources/ParGamRev/Game Review Page.PNG';
import ParGamPic3 from '../../../../Resources/ParGamRev/Posting a new review.PNG';
import ParGamPic4 from '../../../../Resources/ParGamRev/Reviews Section.PNG';
import { projectStyles } from "../ProjectStyles";

function ParentalGaming() {
    return (
        <div className={css(projectStyles.main)}>
            <div className={css(projectStyles.container)}>
                <h1 className={css(projectStyles.headerWords, projectStyles.underline)}>Parental Gaming Reviews</h1>
                {/*<a className={css(projectStyles.linkLine)} href={ParSiteLink()} target='_blank'  rel='noopener noreferrer'><p className={css(projectStyles.linkStyle)}>Live Site Link</p></a>*/}

                <p className={css(projectStyles.paragraphs)}>{ParText1()}</p>
                <p className={css(projectStyles.paragraphs)}>{ParText2()}</p>
                <p className={css(projectStyles.paragraphs)}>{ParText3()}</p>

                <div className={'picContainer'}>
                    <img className={'containerImageSized'} src={ParGamPic1} alt='' />
                </div>

                <p className={css(projectStyles.paragraphs)}>{ParText4()}</p>
                <p className={css(projectStyles.paragraphs)}>{ParText5()}</p>

                <div className={'picContainer picContainerByColumn'}>
                    <img className={'containerImageSized'} src={ParGamPic2} alt='' />
                    <img className={'containerImageSized'} src={ParGamPic3} alt='' />
                    <img className={'containerImageSized'} src={ParGamPic4} alt='' />
                </div>

                <p className={css(projectStyles.technologiesHeader)}>{ParTechHead()}</p>
                <p className={css(projectStyles.technologiesList)}>{ParTechUsed()}</p>

            </div>
        </div>
    )
}

export default ParentalGaming;