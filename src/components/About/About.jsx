import { useTranslation } from 'react-i18next';
import codingGif from '../../../assets/imgs/gifbrstar.gif';

const About = () => {
	const { t } = useTranslation();

	const getAge = () => {
		const today = new Date();
		const birthDate = new Date('05/28/2004');
		let age = today.getFullYear() - birthDate.getFullYear();
		const month = today.getMonth() - birthDate.getMonth();

		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};

	return (
		<section id="about">
			<div className="container">
				<div data-aos="slide-from-top" className="about__desc">
					<h3>{t('Quais os diferencias do BrStar ?')}</h3>
					
					<p>
						<span>{t('Interface atualizada e fácil de manipular')}</span>
						<span>{t('100% criado com tecnologias atuais, podendo unir diversas ideias sistêmicas em um único lugar, para assim servir para qualquer tipo de negócio.')}</span>
						<span>{t('Acessibilidade de ponta implantada, como por exemplo, navegação via comandos de voz e login com reconhecimento facial.')}</span>
					</p>
				</div>
				<div data-aos="slide-to-left" className="about__img">
					<img src={codingGif} alt={t('gif')} />
				</div>
			</div>
		</section>
	);
};

export default About;
