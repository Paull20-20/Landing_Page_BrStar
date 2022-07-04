import { useTranslation } from 'react-i18next';
import profileImage from '../../../assets/imgs/profile-image.png';

const Home = () => {
	const { t } = useTranslation();

	return (
		<section id="home">
			<div className="container">
				<div className="home__intro">
				
					<h2 data-aos="slide-from-top" className="home__intro__name">
						{t('CRM BrStar')}
					</h2>
				
					<p data-aos="slide-from-top" className="home__intro__greetings">
						{t('Um novo CRM inovador quer trará tudo que tiver de mais moderno juntamente de uma acessibilidade digital surpreendente!')} 👋
					</p>
				</div>
				<div className="home__profile" data-aos="slide-to-left">
					<img src={profileImage} alt={t('profile_desc')} />
				</div>
			</div>
		</section>
	);
};

export default Home;
