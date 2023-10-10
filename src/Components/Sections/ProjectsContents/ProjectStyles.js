import { StyleSheet } from "aphrodite";

export const projectStyles = StyleSheet.create({
    main: {
        width: '100%',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        textShadow: '0px 0px 0px black',
    },
    container: {
        background: 'rgba(13,255,186,0.4)',
        // background: 'rgb(248, 248, 255)',
        width: '95%',
        marginTop: '25px',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginBottom: '40px',
        boxShadow: '1px 1px 9px grey',
    },
    underline: {
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    headerWords: {
        fontSize: '40px',
        '@media(max-width: 840px)': {
            fontSize: '35px',
        },
        '@media(max-width: 740px)': {
            fontSize: '30px',
        },
        '@media(max-width: 580px)': {
            fontSize: '25px',
        },
    },
    linkLine: {
        // textDecorationColor: 'white',
    },
    linkStyle: {
        // margin: '0 auto',
        // color: 'white',
        // textDecorationColor: 'white',
        // textDecorationLine: 'white',
        textAlign: 'center',
        marginBottom: '20px',
        '@media(max-width: 840px)': {
            fontSize: '18px',
        },
        '@media(max-width: 740px)': {
            fontSize: '14px',
        },
        '@media(max-width: 580px)': {
            fontSize: '12px',
        },
    },
    paragraphs: {
        textIndent: '50px',
        fontSize: '20px',
        marginLeft: '45px',
        marginRight: '45px',
        '@media(max-width: 840px)': {
            fontSize: '16px',
        },
        '@media(max-width: 740px)': {
            fontSize: '12px',
        },
    },
    technologiesHeader: {
        textAlign: 'center',
        marginTop: '20px',
        textDecorationLine: 'underline',
        fontSize: '25px',
        '@media(max-width: 840px)': {
            fontSize: '22px',
        },
        '@media(max-width: 740px)': {
            fontSize: '18px',
        },
        '@media(max-width: 580px)': {
            fontSize: '14px',
        },
    },
    technologiesList: {
        marginLeft: '45px',
        marginRight: '45px',
        marginBottom: '20px',
        fontSize: '22px',
        textAlign: 'center',
        '@media(max-width: 840px)': {
            fontSize: '18px',
        },
        '@media(max-width: 740px)': {
            fontSize: '16px',
        },
        '@media(max-width: 580px)': {
            fontSize: '12px',
        },
    },
    vidTextTop: {
        textAlign: 'center',
        fontSize: '15px',
        '@media(max-width: 840px)': {
            fontSize: '15px',
        },
        '@media(max-width: 740px)': {
            fontSize: '13px',
        },
        '@media(max-width: 580px)': {
            fontSize: '9px',
        },
    },
    vidContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    videoDimensions: {
        height: 488,
        width: 846,
        margin: '0 auto',
        // height="488"
        // width="846"
        '@media(max-width: 940px)': {
            height: 428,
            width: 746,
        },
        '@media(max-width: 840px)': {
            height: 388,
            width: 646,
        },
        '@media(max-width: 740px)': {
            height: 328,
            width: 546,
        },
        '@media(max-width: 620px)': {
            height: 188,
            width: 346,
        },
        '@media(max-width: 390px)': {
            height: 148,
            width: 246,
        },
    },
});