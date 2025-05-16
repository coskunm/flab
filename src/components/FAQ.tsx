import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Forex şirketi seçerken en önemli 3 kriter nedir?",
      answer: (
        <>
          <p><strong>Regülasyon & Lisans:</strong> Yetkili otoritelerce denetlenen kurumlar paranızı korur.</p>
          <p><strong>Maliyetler:</strong> Düşük spread ve komisyon, uzun vadede kârlılığınızı artırır.</p>
          <p><strong>Para Çekme Hızı:</strong> İşlemleriniz kazanca döndüğünde fonlarınıza hızlı erişim sağlayan broker seçin.</p>
        </>
      )
    },
    {
      question: "Spread tam olarak nedir ve neden bu kadar vurgulanıyor?",
      answer: (
        <p>Spread, alış (Bid) ile satış (Ask) fiyatı arasındaki farktır—işlem başına ödediğiniz temel maliyettir. Ne kadar düşükse işlem başına o kadar az ücret ödersiniz; özellikle sık trade yapanlar için kritik öneme sahiptir.</p>
      )
    },
    {
      question: "Yüksek kaldıraç avantaj mı, risk mi?",
      answer: (
        <p>Kaldıraç kazancı büyütebilir ama zararı da aynı oranda artırır. Yeni başlayanlar 1:100 – 1:200 seviyeleriyle yetinmeli, deneyim kazandıkça oran yükseltilmelidir. Negatif bakiye koruması olan brokerları tercih ederek kaldıraç riskini sınırlayın.</p>
      )
    },
    {
      question: "Para çekme işlemleri ne kadar sürer?",
      answer: (
        <p>Listemizdeki brokerlar genellikle 0 – 24 saat içinde para çekme taleplerini sonuçlandırır. Banka havalesi süresi bankanıza bağlı olarak uzayabilir. Talep etmeden önce brokerın "ücret ve süre" tablosuna göz atın.</p>
      )
    },
    {
      question: "Türkçe destek gerçekten gerekli mi?",
      answer: (
        <p>Evet. Emir türleri, teminat gereksinimleri veya beklenmedik hesap sorunlarında ana dilinizde kaliteli destek, hatalı işlem riskini düşürür. Özellikle yeni yatırımcılar için Türkçe canlı sohbet veya telefon hattı büyük avantaj sağlar.</p>
      )
    },
    {
      question: "Brokerları listemize alırken hangi metodolojiyi kullanıyoruz?",
      answer: (
        <>
          <p><strong>Çok-katmanlı Tarama:</strong> 30'dan fazla küresel broker; lisans, şikâyet geçmişi ve mali raporlarla ön elemeden geçer.</p>
          <p><strong>Kritik Kriter Puanlama:</strong> Spread, kaldıraç, para çekme hızı, platform kalitesi, Türkçe destek ve kullanıcı memnuniyetine 1–10 arası ağırlıklı skor verilir.</p>
          <p><strong>Gerçek Hesap Testi:</strong> Editörlerimiz her brokerda minimum depozito ile canlı işlem açar, emir yürütme ve para çekme sürelerini kronometreler.</p>
          <p><strong>Kullanıcı Geri Bildirimi:</strong> Sadece doğrulanmış hesap sahiplerinin yorumları dahil edilir; spam veya teşvikli puanlamalar elenir.</p>
          <p>Sonuçta ortaya çıkan bileşik puan, listede gördüğünüz sıralamayı belirler.</p>
        </>
      )
    },
    {
      question: "Forex piyasası genel olarak güvenilir mi?",
      answer: (
        <p>Forex, küresel bankalar arası likiditeyle 24 saat açık en büyük finans piyasasıdır. Ancak güvenilirlik, kullandığınız aracı kurumun regülasyonuna ve şeffaflığına bağlıdır. Lisanslı bir broker kullanırsanız piyasa altyapısı kadar güvenli işlem yaparsınız.</p>
      )
    },
    {
      question: "Bir forex şirketinin güvenilir olduğunu nasıl doğrulayabilirim?",
      answer: (
        <>
          <p><strong>Lisans Kontrolü:</strong> FCA, CySEC, ASIC gibi otoritelerin sicil arama sayfalarından broker adını sorgulayın.</p>
          <p><strong>Müşteri Fon Ayrıştırması:</strong> "Segregated accounts" beyanı ve tazminat fonu kapsamında olup olmadığını inceleyin.</p>
          <p><strong>Para Çekim Geçmişi:</strong> Bağımsız forum ve Telegram topluluklarında gecikme şikâyeti var mı bakın.</p>
          <p><strong>Şeffaf Ücret Tablosu:</strong> Gizli komisyon, swap veya inaktivite ücreti olup olmadığını net biçimde açıklayan brokerları seçin.</p>
        </>
      )
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-heading">Sık Sorulan Sorular (FAQ)</h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;