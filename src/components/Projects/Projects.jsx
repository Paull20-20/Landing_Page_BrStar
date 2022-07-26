import { useTranslation } from 'react-i18next';
import Project from './Project';
import { useState } from 'react';

const Projects = () => {
	const { t } = useTranslation();
	const [showMore, setShowMore] = useState(false);

	return (
		<section id="projects">
			<div className="container">
				<h2 className="projects__title" data-aos="slide-to-left">
					{t('projects__title')}
				</h2>
				<div className="projects__container">
					<Project
						repo="https://github.com/thomasluizon/url-shortening-api-react"
						demo="https://url-shortening-api-react.vercel.app/"
						desc={t('CRM criado para inovar o mercado de software em desenvolvimento!')}
						img ="https://github.com/thomasluizon/url-shortening-api-react/raw/main/src/assets/Screenshots/Screenshot_2-mobile.png"
					/>
				


				</div>

				<button
					className="show-more"
					data-aos="slide-from-top"
					onClick={() => setShowMore(!showMore)}
				>
					{t(showMore ? 'show_less' : 'show_more')}
				</button>
			</div>
		</section>
	);
};

export default Projects;
