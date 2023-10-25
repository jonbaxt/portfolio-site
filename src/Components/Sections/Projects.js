import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import ServedUp from './ProjectsContents/ServedUpSurveys/ServedUp';
import BIAClone from './ProjectsContents/BIAClone/BIAClone';
import ParentalGaming from './ProjectsContents/ParentalGaming/ParentalGaming';
import NSCClone from './ProjectsContents/NSCClone/NSCClone';
import InventoryWarehouse from './ProjectsContents/InventoryWarehouse/InventoryWarehouse';

function Projects() {

    return (
        <div className={css(styles.main)}>
            <h1 className={css(styles.bigFont, styles.under)}>Projects</h1>
            <h2 className={css(styles.smallFont) + ' centered'}>Not all sites have working demos anymore, the code is still available to view on my <a href={'https://github.com/jonbaxt'} target='_blank' rel='noopener noreferrer'>GitHub Account</a></h2>

            <ServedUp />
            <BIAClone />
            <InventoryWarehouse />
            <ParentalGaming />
            <NSCClone />
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        color: 'black',
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
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Projects;