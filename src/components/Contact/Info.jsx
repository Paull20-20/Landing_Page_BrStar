import { useTranslation } from 'react-i18next';

const Info = () => {
   const { t } = useTranslation();
   return (
      <ul data-aos="slide-from-top" className="contact__info">
         <li>
            <i className="bi bi-geo-alt-fill"></i>
            {/* <p>{t('brasil')}, Natal, Rio Grande do Norte</p> */}
            <a href="https://www.google.com/maps/place/Natal,+RN/@-5.7999146,-35.2922847,12z/data=!3m1!4b1!4m5!3m4!1s0x7b3aaac26460531:0x5d8b404cf00fed69!8m2!3d-5.7841695!4d-35.1999708" target="_blank">
               {t('Brasil')}, Natal, Rio Grande do Norte
            </a>
         </li>
         <li>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:crmbrstart@gmail.com">
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
