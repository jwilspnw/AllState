import React from 'react';
import PropTypes from 'prop-types';

const header = {
    en: 'About All State Inspections',
    sp: 'Sobre All State Inspections',
}

const intro = {
    en: 'All State Inspections is a home inspection business founded in 2013 by Joel Wilson, and based in Kennewick, Washington.',
    sp: 'All State Inspections es un negocio de inspección de viviendas fundado en 2013 por Joel Wilson, y con sede en Kennewick, Washington.',
}

const fromJoel = {
    en: 'From Joel:',
    sp: 'Palabras de Joel',
}

const dadPitch = {
    en: `My name is Joel Wilson, and I hope to be your future home inspector.
    Please take a few minutes to go over my website.
    If you are looking for a reliable and straightforward professional to take care of your inspection needs, I feel confident that I am the guy for you.`,
    sp: `Mi nombre es Joel Wilson y espero ser su futuro inspector de viviendas.
    Por favor tómese unos minutos para revisar mi sitio web.
    Si está buscando un profesional confiable y directo que se encargue de sus necesidades de inspección, estoy seguro de que soy el indicado para usted.`,
};

const based = {
    en: 'All State Inspections is based out of the Tri-Cities and performs residential inspections all over Eastern Washington.',
    sp: 'All State Inspections se basan en Tri-Cities y realizan inspecciones residenciales en todo el este de Washington.',
}

const contact = {
    en: 'Contact us any time at (509)378-2549',
    sp: 'Contáctenos en cualquier momento al (509)378-2549',
}

export default class About extends React.Component {
    render() {
        const lang = this.props.language;
        return (<div name="who we are">
                    <h2>
                        {header[lang]}
                    </h2>
                    <div className="details">
                        {intro[lang]}
                        <br />
                        {fromJoel[lang]}
                        <hr style={{height:5, visibility:'hidden'}} />
                        <div style={{paddingLeft: '1%', font: 'italic'}} className="quote">
                        {dadPitch[lang]}
                        </div>
                        <hr style={{height:5, visibility:'hidden'}} />
                        {based[lang]}
                        <br />
                        <hr style={{height:5, visibility:'hidden'}} />
                        {contact[lang]}
                    </div>
                </div>);
    }
}

About.propTypes = {
    language: PropTypes.string.isRequired
};

About.defaultProps = {
    language: 'en'
};
