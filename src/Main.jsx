import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import WhyAllState from './WhyAllState';
import Reviews from './Reviews';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en'
        };
        this.setEnglish = this.setEnglish.bind(this);
        this.setSpanish = this.setSpanish.bind(this);
    }

    setEnglish(e) {
        e.preventDefault();
        this.setState({
            language: 'en'
        });
        console.log(this.state.language);
    }

    setSpanish(e) {
        e.preventDefault();
        this.setState({
            language: 'sp'
        });
    }

    render() {
        return (
            <div style={{fontFamily: 'Montserrat,  sans-serif', height: '100%', margin: 0}}>
                <div className='content' style={{minHeight: '100%'}}>
                    <div style={{paddingBottom: 100}} >
                        <Header
                            setEnglish={this.setEnglish}
                            setSpanish={this.setSpanish}
                            language={this.state.language}
                        />
                        <div className="main" style={{padding:15}}>
                            <About language={this.state.language} />
                            <WhyAllState language={this.state.language} />
                            <Reviews language={this.state.language} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
