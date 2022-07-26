import { useTranslation } from 'react-i18next';
import Project from './Project';
import { useState } from 'react';

const Projects = () => {
	const { t } = useTranslation();
	const [showMore, setShowMore] = useState(false);

	function Demo(){
		alert("\nOps, opção ainda não habilitada, mas em breve estará disponível!")
	}

	return (
		<section id="projects">
			<div className="container">
				<h2 className="projects__title" data-aos="slide-to-left">
					{t('projects__title')}
				</h2>
				<div className="projects__container">
					<Project
						repo="https://github.com/Paull20-20/Landing_Page_BrStar"
						demo="https://github.com/Paull20-20/Landing_Page_BrStar"
						desc={t('CRM criado para inovar o mercado de software em desenvolvimento!')}						
						img ="./assets/imgs/crm.png"
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
