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

const codeOfEthics = {
    en: <div>
        All State Inspections abides by a strict 
        &thinsp;<a href="https://www.nachi.org/code_of_ethics.htm" target="_blank" rel="noopener noreferrer">Code of Ethics</a>,&thinsp;
        which puts our duty to you first.
        </div>,
    sp: <div>Todas las inspecciones estatales cumplen con un estricto
        &thinsp;<a href="https://www.nachi.org/code_of_ethics.htm" target="_blank" rel="noopener noreferrer">Código de Ética</a>,&thinsp;
        que establece nuestro deber primero con usted.
        </div>
}

const standardsOfPractice = {
    en: <div>
        We follow the inspection industry’s most comprehensive
        &thinsp;<a href="https://www.nachi.org/sop.htm" target="_blank" rel="noopener noreferrer">Standards of Practice</a>.
        </div>,
    sp: <div>
        Seguimos los 
        &thinsp;<a href="https://www.nachi.org/sop.htm" target="_blank" rel="noopener noreferrer">Estándares de Práctica</a>&thinsp;
        más completos de la industria de inspección.
        </div>
}

const skillsAndAbilities = {
    en: 'Skills and Abilities',
    sp: 'Destrezas y Habilidades'
}

const tools = {
    en: 'All State Inspections uses the latest in inspection tools, technology, and reporting software.',
    sp: 'All State Inspections utilizan lo último en herramientas de inspección, tecnología y software de informes.'
}

const specialized = {
    en: 'We offer specialized and ancillary services, in addition to standard, full home inspections, so that we can meet your specific inspection needs – just ask!',
    sp: 'Ofrecemos servicios especializados y auxiliares, además de inspecciones de viviendas estándar y completas, para que podamos satisfacer sus necesidades específicas de inspección. ¡Todo lo que necesitas hacer es preguntar!'
}

const ethical = {
    en: 'Ethical and Personable',
    sp: 'Ético y agradable'
}

const unbiased = {
    en: 'All State Inspections performs a complete, unbiased, visual examination of the property.', 
    sp: 'Todas las inspecciones estatales realizan un examen visual completo e imparcial de la propiedad.'
}

const present = {
    en: 'We encourage our clients to be present during inspections and welcome all questions. It is our goal to help you understand any equipment operation and will highlight the location of important features.',
    sp: 'Alentamos a nuestros clientes a estar presentes durante las inspecciones y damos la bienvenida a todas las preguntas. Nuestro objetivo es ayudarlo a comprender cualquier operación de equipo y resaltará la ubicación de características importantes.'
}

const personal = {
    en: 'Finally, All State Inspections will work with you on a personal level to both address and remedy any concerns that may exist with your home. All findings are clearly and completely printed out in a narrative report for the client.',
    sp: 'Finalmente, All State Inspections trabajará con usted a nivel personal para abordar y solucionar cualquier inquietud que pueda existir con su hogar. Todos los hallazgos se imprimen clara y completamente en un informe narrativo para el cliente.'
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
                {codeOfEthics[props.language]}
            </dd>
            <dd>
                {standardsOfPractice[props.language]}
            </dd>
            <dt>
                {skillsAndAbilities[props.language]}
            </dt>
            <dd>
                {tools[props.language]}
            </dd>
            <dd>
                {specialized[props.language]}
            </dd>
            <dt>
                {ethical[props.language]}
            </dt>
            <dd>
                {unbiased[props.language]}
            </dd>
            <dd>
                {present[props.language]}
            </dd>
            <dd>
                {personal[props.language]}
            </dd>
        </dl>
    </div>
</div>);

export default WhyAllState;
