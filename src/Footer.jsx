import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer style={{
                backgroundColor: "#804d00",
                backgroundImage: `url("https://i.imgur.com/9BW3Mg2.png")`,
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                
                height: 100,
                marginTop: -100
                }}>
                <img alt="Instragram Logo" src={require("./iglogo.svg")} style={{
                    filter: 'invert(100%)',
                    padding: 15,
                    height: 60
                }}/>
                <a
                    href='https://www.facebook.com/AllStateInspectionsTC/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img alt="Facebook Logo" src={require("./fblogo.svg")} style={{
                        filter: 'invert(100%)',
                        padding: 15,
                        height: 60
                    }}/>
                </a>
                <a
                    href='https://www.homeadvisor.com/sp/all-state-inspections-kennewick-wa-7#profileSectionHeader'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img
                        alt="HomeAdvisor Logo"
                        src={require("./halogo.png")}
                        style={{
                        padding: 15,
                        height: 60,
                    }}/>
                </a>
            </footer>
        );
    }
}
