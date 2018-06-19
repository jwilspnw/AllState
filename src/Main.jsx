import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import WhyAllState from './WhyAllState'

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
        console.log(this.state.language);
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
                        <div className="reviews">
                            <h2>
                                Reviews
                            </h2>
                            <div>
                            After your inspection we encourage you to leave us a review. Please visit <a href="http://www.homeadvisor.com/write-a-review/36272777/" target="_blank" rel="noopener noreferrer">Home Advisor</a> in order to grade our quality of work and customer service.
                            <br /><br />
                            Thank you for visiting our site, we look forward to working with you!
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
