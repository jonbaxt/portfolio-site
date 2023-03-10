import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import ServedUp from './ProjectsContents/ServedUpSurveys/ServedUp';
import BIAClone from './ProjectsContents/BIAClone/BIAClone';
// import ParentalGaming from './ProjectsContents/ParentalGaming/ParentalGaming';
// import NSCClone from './ProjectsContents/NSCClone/NSCClone';
// import InventoryWarehouse from './ProjectsContents/InventoryWarehouse/InventoryWarehouse';

function Projects() {

    return (
        <div className={css(styles.main)}>
            <a href='/' name={'projectsSection'} style={{visibility: 'hidden'}}>Hidden</a>
            <h1 className={css(styles.bigFont, styles.under)}>Projects</h1>

            <ServedUp />
            <BIAClone />
            {/*<InventoryWarehouse />*/}
            {/*<ParentalGaming />*/}
            {/*<NSCClone />*/}
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        // height: '200vh',
        // borderTop: '3px dashed blue',
        // borderBottom: '3px dashed blue',
        color: 'black',
        // boxShadow: '2px 2px 4px black',
    },
    bigFont: {
        // zIndex: '10',
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