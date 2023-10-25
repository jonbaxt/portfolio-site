import React from 'react';
import { css } from 'aphrodite';
import '../ProjectComponents.css'
import { NSCText1, NSCText2, NSCText3, NSCTechHead, NSCTechUsed
    // , NSCLinkSite
} from './NSCText';

import NSCPic from '../../../../Resources/NSCSite/NSCStyleClone.PNG';
import {projectStyles} from "../ProjectStyles";

function NSCClone() {
    return (
        <div className={css(projectStyles.main)}>
            <div className={css(projectStyles.container)}>
                <h1 className={css(projectStyles.headerWords, projectStyles.underline)}>Naval Building College SASS Clone</h1>
                {/*<a className={css(projectStyles.linkLine)} href={NSCLinkSite()} target='_blank'  rel='noopener noreferrer'><p className={css(projectStyles.linkStyle)}>Live Site Link</p></a>*/}

                <p className={css(projectStyles.paragraphs)}>{NSCText1()}</p>
                <p className={css(projectStyles.paragraphs)}>{NSCText2()}</p>
                <p className={css(projectStyles.paragraphs)}>{NSCText3()}</p>

                <div className={'picContainer'}>
                    <img className={'containerImageSized'} src={NSCPic} alt='' />
                </div>

                <p className={css(projectStyles.technologiesHeader)}>{NSCTechHead()}</p>
                <p className={css(projectStyles.technologiesList)}>{NSCTechUsed()}</p>

            </div>
        </div>
    )
}

export default NSCClone;