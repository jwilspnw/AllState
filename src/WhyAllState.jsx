import React from 'react';

const header = {
    en: 'Why All State Inspections?',
    sp: '¿Por qué All State Inspections?',
}

const health = {
    en: 'Apart from your health, your home is the biggest investment in your life.',
    sp: 'Excepto por su salud, su hogar es la mayor inversión en su vida.'
}

const decisions = {
    en: 'Let all state inspections guide you in your buying and selling decisions. We recommend carefully reviewing our numerous qualifications, but these are some of our highlights to accelerate your decision-making process.',
    sp: 'Deje que todas las inspecciones estatales lo guíen en sus decisiones de compra y venta. Recomendamos revisar cuidadosamente nuestras numerosas calificaciones, pero estos son algunos de nuestros puntos destacados para acelerar su proceso de toma de decisiones.',
}

const internachiMember = {
    en: 'All State Inspections is a member of the prestigious Inter-NACHI oragization.',
    sp: 'All State Inspections es miembro de la prestigiosa organización Inter-NACHI.'
}

const asAMember = {
    en: <div>
            As a member of the <a href="https://www.nachi.org/" target="_blank" rel="noopener noreferrer">International Association of Certified Home Inspectors</a>, All State Inspections is among the best trained and best qualified inspectors in the business.
        </div>,
    sp: <div>
            Como miembro de la <a href="https://www.nachi.org/" target="_blank" rel="noopener noreferrer">International Association of Certified Home Inspectors</a>, se encuentran entre los inspectores mejor entrenados y mejor calificados en el negocio.
        </div>
}

const continuingEd = {
    en: <div>
        All State Inspections is required to continually update our skills, training and education by taking the industry’s most rigorous
        &thinsp;<a href=" https://www.nachi.org/education.htm" target="_blank" rel="noopener noreferrer">Continuing Education</a>,&thinsp;
        created especially for home inspectors by top experts, and accredited by nearly 1,000 state and regulatory agencies across North America.
        </div>,
    sp: <div>
        Se requieren All State Inspections para actualizar continuamente nuestras habilidades, capacitación y educación al tomar la
        &thinsp;<a href=" https://www.nachi.org/education.htm" target="_blank" rel="noopener noreferrer">Educación Continua</a>&thinsp;
        más rigurosa de la industria, creada especialmente para inspectores de viviendas por los mejores expertos, y acreditada por casi 1.000 agencias estatales y reguladoras en toda América del Norte.
        </div>
}

const WhyAllState = props => (<div name="internachi">
    <h2>
        {header[props.language]}
    </h2>
    <div className="details">
        <b>{health[props.language]}</b>
        <br />
        {decisions[props.language]}
        <dl>
            <dt>
            {internachiMember[props.language]}
            </dt>
            <dd>
                {asAMember[props.language]}
            </dd>
            <dd>
                {continuingEd[props.language]}
            </dd>
            <dd>
                All State Inspections abides by a strict <a href="https://www.nachi.org/code_of_ethics.htm" target="_blank" rel="noopener noreferrer">Code of Ethics</a>, which puts our duty to you first.
            </dd>
            <dd>
                We follow the inspection industry’s most comprehensive <a href="https://www.nachi.org/sop.htm" target="_blank" rel="noopener noreferrer">Standards of Practice</a>.
            </dd>
            <dt>
                Skills and Abilities
            </dt>
            <dd>
                All State Inspections uses the latest in inspection tools, technology, and reporting software.
            </dd>
            <dd>
                We offer specialized and ancillary services, in addition to standard, full home inspections, so that we can meet your specific inspection needs – just ask!
            </dd>
            <dt>
                Ethical and Personable
            </dt>
            <dd>
                All State Inspections performs a complete, unbiased, visual examination of the property.
            </dd>
            <dd>
                We encourage our clients to be present during inspections and welcome all questions. It is our goal to help you understand any equipment operation and will highlight the location of important features.
            </dd>
            <dd>
                Finally, All State Inspections will work with you on a personal level to both address and remedy any concerns that may exist with your home. All findings are clearly and completely printed out in a narrative report for the client.
            </dd>
        </dl>
    </div>
</div>);

export default WhyAllState;
