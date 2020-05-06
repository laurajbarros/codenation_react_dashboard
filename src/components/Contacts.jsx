import React from "react";
import Contact from "./Contact";
import './contacts.scss';

const Contacts = ({contacts}) => {
	return (
    <div className="container" data-testid="contacts">
			<section className="contacts">
				<article className="contact">
					<span className="contact__avatar" />
					<span className="contact__data">Nome</span>
					<span className="contact__data">Telefone</span>
					<span className="contact__data">País</span>
					<span className="contact__data">Admissão</span>
					<span className="contact__data">Empresa</span>
					<span className="contact__data">Departamento</span>
				</article>
				{
					contacts ?
					contacts.map(({id, ...otherProps}) =>
						<Contact key={id} {...otherProps}/>
					) :
					<div>There was a problem fetching your data</div>
				}
			</section>
		</div>
	)
};

export default Contacts;
