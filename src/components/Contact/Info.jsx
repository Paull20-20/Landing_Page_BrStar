import { useTranslation } from 'react-i18next';

const Info = () => {
   const { t } = useTranslation();
   return (
      <ul data-aos="slide-from-top" className="contact__info">
         <li>
            <i className="bi bi-geo-alt-fill"></i>
            <p>{t('brasil')}, Natal, Rio Grande do Norte</p>
         </li>
         <li>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:paulloholiveira77@gmail.com">
               crmbrstart@gmail.com
            </a>
         </li>
         <li>
            <i className="bi bi-telephone-fill"></i>
            <a href="tel:+5584996553029">+5584996553029</a>
         </li>
      </ul>
   );
};

export default Info;
