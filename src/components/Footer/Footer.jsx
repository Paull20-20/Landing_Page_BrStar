import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   const year = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="container">
            <p>
               © Copyright {year}. {t('copyright')}
            </p>
            <ul className="footer_socials">
               <li>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/crm-brstar-893819244/">
                     <img src="./assets/imgs/in1.png" alt="png" className='linkedin in'/>
                  </a>
               </li>
               <li>
                  <a target="_blank" href="https://github.com/CRMBrStar">
                     <img src="./assets/imgs/git2.png" alt="png" className='github in'/>
                  </a>
               </li>
               <li>
                  <a target="_blank" href="https://wa.me/5584996553029">
                     <img src="./assets/imgs/whats3.png" alt="png" className='whatsapp in'/>
                  </a>
              
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
