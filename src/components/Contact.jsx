import React from 'react';
import './contact.scss';

const Contact = ({
  name,
  avatar,
  company,
  department,
  admissionDate,
  phone,
  country}) => {
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar" data-testid="contact-avatar">
        <img src={avatar} alt=''/>
      </span>
      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>
      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>
      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>
      <span className="contact__data" data-testid="contact-date">
        { admissionDate &&
          new Date(admissionDate).toLocaleDateString('pt')
        }
      </span>
      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>
      <span className="contact__data" data-testid="contact-department">
        {department}
      </span>
    </article>
  )
}

export default Contact;
