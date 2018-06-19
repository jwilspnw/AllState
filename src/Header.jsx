import React from 'react';
import MediaQuery from 'react-responsive';

class Header extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(max-width: 1224px)">
                    <HeaderMobile />
                </MediaQuery>
                <MediaQuery query="(min-width: 1225px)">
                    <HeaderFull
                        setEnglish={this.props.setEnglish}
                        setSpanish={this.props.setSpanish}
                        language={this.props.language}
                    />
                </MediaQuery>
            </div>
        )
    }
}

class HeaderFull extends React.Component {
    render() {
        return (
            <header 
                className="stiched"
                style={{
                backgroundColor: "#804d00",
                backgroundImage: `url("https://i.imgur.com/9BW3Mg2.png")`,
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: "white",
                textShadow: "0 0 2px #165700",
                }}>
                <img alt="Company Logo" src={require('./biglogo.svg')} style={{
                marginLeft: 15, marginRight: 15, height: 80, paddingTop: 10, paddingBottom: 10 }}/>
                {/* <h1 style={{fontFamily: 'Roboto Condensed,  sans-serif', fontSize: 40, marginLeft: 15, marginRight: 15}}>
                    All State Inspections
                </h1> */}
                <div style={{display: 'flex',
                            verticalAlign: 'top',
                            height: 100,
                            marginTop: 10,
                            justifyContent: 'space-between', }}>
                    <img alt="All" src={require('./all.png')} style={{
                    width: 'auto', height: 70, objectFit: 'contain' }} />
                    <img alt="State" src={require('./state.png')} style={{
                      width: 'auto', height: 68, objectFit: 'contain', paddingTop: 3, marginLeft: 30  }} />
                    <img alt="Inspections" src={require('./inspections.png')} style={{
                    width: 'auto', height: 90, objectFit: 'contain', marginLeft: 30 }} />
                </div>
                <span style={{marginLeft: 15, marginRight: 15}}>
                    <div style={{marginTop: -40}}>
                    <img 
                        alt="US flag" 
                        src={require('./usflag.svg')} 
                        style={
                            this.props.language === 'en'
                            ? { height: 15 }
                            : { height: 15, filter: 'grayscale(100%)' }
                        }
                        onClick={this.props.setEnglish}/>
                    <img alt="Company Logo" src={require('./mxflag.svg')} style={
                            this.props.language === 'sp'
                            ? { height: 15, paddingLeft: 10 }
                            : { height: 15, paddingLeft: 10, filter: 'grayscale(100%)' }
                        }
                        onClick={this.props.setSpanish}/>
                    </div>
                </span>
            </header>
        );
    }
}

class HeaderMobile extends React.Component {
    render() {
        return <header style={{
            backgroundColor: "#804d00",
            backgroundImage: `url("https://i.imgur.com/9BW3Mg2.png")`,
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: "white",
            textShadow: "0 0 2px #165700",
            
            }}>
            <div>
                <img alt="Company Logo" src={require('./biglogo.svg')} style={{
                    marginLeft: 15, marginRight: 15, height: 225, paddingTop: 10, paddingBottom: 10 }}/>
                <h1 style={{fontFamily: 'Roboto Condensed,  sans-serif',  position: 'Absolute', fontSize: 40, left: 180, top: 20}} >
                    All<br />
                    State<br />
                    Inspections
                </h1>
            </div>
            <span style={{marginLeft: 15, marginRight: 15}}>
                Menu Icon
            </span>
        </header>
    }
}

export default Header;
