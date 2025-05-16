import React from 'react';
import { Shield } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Shield size={32} />
          <span>ForexLab</span>
        </div>
        
        <div className="footer-content">
          <div className="disclosure">
            <h4>Şeffaflık Bildirimi</h4>
            <p>
              ForexLab'da sunulan inceleme, sıralama ve içerikler editörlerimizin tarafsız görüşlerini yansıtır ve ziyaretçilere doğru aracı kurum seçimi için rehberlik etmeyi amaçlar. Sitedeki bazı bağlantılar sponsorlu olabilir ve tıklama sonrası yapılan işlemlerden gelir elde edilebilir. Editör ekibimiz, finansal kazançtan bağımsız olarak en güncel ve doğru bilgileri sunmaya özen gösterir.
            </p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="copyright">
          <p>Copyright © {currentYear} forexlab.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;