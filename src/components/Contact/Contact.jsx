import { useTranslation } from 'react-i18next';

import Info from './Info';
import Form from './Form';

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section id="contact">
			<div className="container">
				<h2 className="contact__title" data-aos="slide-to-left">
					{t('contact')}
				</h2>
				<p className="contact__desc" data-aos="slide-to-left">
					{t('Caso deseje entrar em contato conosco para qualquer tipo de assunto, preencha o formulário abaixo!')}
				</p>
				<div className="contact__form-wrapper">
					<Info />
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
