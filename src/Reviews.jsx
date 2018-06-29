import React from 'react';

const leaveAReview = {
    en: <div>
        After your inspection we encourage you to leave us a review. Please visit
        &thinsp;<a href="http://www.homeadvisor.com/write-a-review/36272777/" target="_blank" rel="noopener noreferrer">Home Advisor</a>&thinsp;
        in order to grade our quality of work and customer service.
        </div>,
    sp: <div>
        Después de su inspección, le recomendamos que nos deje una revisión. Visite
        &thinsp;<a href="http://www.homeadvisor.com/write-a-review/36272777/" target="_blank" rel="noopener noreferrer">Home Advisor</a>&thinsp;
        para calificar nuestra calidad de trabajo y servicio al cliente.
        </div>
};

const thanks = {
    en: 'Thank you for visiting our site, we look forward to working with you!',
    sp: '¡Gracias por visitar nuestro sitio, esperamos poder trabajar con usted!'
}

const Reviews = props => (
    <div className="reviews">
        <h2>
            {props.language === 'en'
            ? 'Reviews'
            : 'Comentarios'}
        </h2>
        <div>
            {leaveAReview[props.language]}
            <br /><br />
            {thanks[props.language]}
        </div>
    </div>
);

export default Reviews;