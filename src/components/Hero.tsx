import React from 'react';
import { Calendar } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const currentDate = new Date();
  const twoDaysAgo = new Date(currentDate);
  twoDaysAgo.setDate(currentDate.getDate() - 2);
  const lastUpdateDate = twoDaysAgo.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            En İyi Forex Şirketleri
          </h1>
          <p className="hero-description">
            Piyasalarda güvenli, hızlı ve kazançlı işlemler yapmak için doğru yerdesiniz. Deneyimli yatırımcılar ve uzman editörlerimiz tarafından test edilen en iyi forex şirketlerini sizin için listeledik.
          </p>
          
          <div className="hero-checklist">
  <ul>
    <li><span className="check-icon" aria-hidden="true">{/* SVG check icon */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1976D2"/>
        <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span> Yatırım yapmadan önce tüm forex şirketlerini karşılaştırın</li>
    <li><span className="check-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1976D2"/>
        <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span> Düşük spreadler ve yüksek kaldıraç oranlarını inceleyin</li>
    <li><span className="check-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1976D2"/>
        <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span> Türkiye'de en hızlı para çekim yapan firmaları keşfedin</li>
    <li><span className="check-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1976D2"/>
        <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span> Lisanslı ve güvenli aracı kurumlar ile işlem yapın</li>
    <li><span className="check-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1976D2"/>
        <path d="M6.5 10.5L9 13L13.5 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span> En iyi forex deneyimi için doğru şirketi seçin</li>
  </ul>
</div>
          <div className="last-update">
            <Calendar size={16} /> 
            <p>Güncelleme tarihi <span>{lastUpdateDate}</span></p>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://olivemarkets263.com/wp-content/uploads/2024/09/assistant-1.png" alt="Forex asistanı - modern illüstrasyon" className="hero-main-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;