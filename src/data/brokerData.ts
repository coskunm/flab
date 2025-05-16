import { brokerLogos } from '../assets';

export interface BrokerProvider {
  id: number;
  name: string;
  logo: string;
  description: string;
  rating: number;
  userRatings: number;
  bestFor?: string;
  pros: string[];
  cons: string[];
  specialOffer: {
    text: 'Güncel Bonus';
    bonusDescription: string;
  };
  minDeposit: string;
  website: string;
  regulator: string;
  spread: string;
  leverage: string;
  turkishSupport: string;
  negativeBal: string;
  ratings: {
    fastWithdrawal: number;
    licensed: number;
    support: number;
    lowSpread: number;
    reliable: number;
  };
}

const brokerData: BrokerProvider[] = [
  /* ---------- 1. OLIVE MARKETS ---------- */
  {
    id: 1,
    name: 'Olive Markets',
    logo: brokerLogos.oliveMarkets,
    description:
      'Olive Markets, rekabetçi spread oranları ve geniş ürün yelpazesiyle Türkiye'de en çok tercih edilen forex şirketlerinden biridir. Hem yeni başlayanlara hem de deneyimli yatırımcılara uygun güvenilir işlem koşulları sunar.',
    rating: 9.2,
    userRatings: 2_430,
    bestFor: 'Rekabetçi Spreadler',
    pros: [
      'Güvenilir ve regüle edilmiş kurum',
      'Düşük spread ile maliyet avantajı',
      '1:300'e kadar kaldıraç',
      'Geniş enstrüman çeşitliliği',
      'Hızlı para çekimi ve 7/24 Türkçe destek'
    ],
    cons: ['Nano hesap seçeneği yok'],
    specialOffer: {
      text: 'Güncel Bonus',
      bonusDescription:
        "Mayıs'ta kripto işlemlerine özel: 500 $ yatır, 250 $; 1 500 $ yatır, 1 000 $ bonus al."
    },
    minDeposit: '100 USD',
    website: 'olivemarkets.com',
    regulator: 'GLOFSA',
    spread: 'Düşük',
    leverage: '1:300',
    turkishSupport: 'Var',
    negativeBal: 'Var',
    ratings: {
      fastWithdrawal: 9.5,
      licensed: 10,
      support: 9,
      lowSpread: 9,
      reliable: 10
    }
  },

  /* ---------- 2. FXPRO ---------- */
  {
    id: 2,
    name: 'FxPro',
    logo: brokerLogos.fxPro,
    description:
      'FxPro, FCA ve CySEC lisanslarıyla güven veren, düşük spread ve gelişmiş platform seçenekleri sunan global bir brokerdır.',
    rating: 8.7,
    userRatings: 1_940,
    bestFor: 'Lisans Çeşitliliği',
    pros: [
      'FCA & CySEC lisansları',
      'Çok düşük spread (ECN hesap)',
      'Türkçe destek mevcut',
      'MT4, MT5, cTrader ve mobil platformlar',
      'Hızlı emir yürütme'
    ],
    cons: ['Türkçe destek geliştirilebilir'],
    specialOffer: {
      text: 'Güncel Bonus',
      bonusDescription:
        'Raw Spread hesaplarına özel %30 depozito bonusu + 50 $ risk-free trade.'
    },
    minDeposit: '100 USD',
    website: 'fxpro.com',
    regulator: 'FCA, CySEC, DFSA, SCB',
    spread: 'Çok Düşük',
    leverage: '1:500',
    turkishSupport: 'Var',
    negativeBal: 'Var',
    ratings: {
      fastWithdrawal: 9,
      licensed: 9.5,
      support: 8,
      lowSpread: 8,
      reliable: 9
    }
  },

  /* ---------- 3. XM GLOBAL ---------- */
  {
    id: 3,
    name: 'XM Global',
    logo: '/src/assets/images/brokers/xm-forex-560x350.png',
    description:
      'XM Global, 5 $'lık düşük alt limiti ve 1:1000'e kadar kaldıraç sunarak geniş yatırımcı kitlesine hitap eden popüler bir brokerdır.',
    rating: 8.5,
    userRatings: 3_120,
    bestFor: 'Düşük Alt Limit',
    pros: [
      'ASIC & CySEC lisanslı',
      '5 $ minimum yatırımla hesap açılışı',
      'Düşük spread, bonus kampanyaları',
      'Türkçe müşteri desteği',
      'Hızlı para çekim süreci'
    ],
    cons: ['Hesap açılış formunda Türkçe seçenek bulunmuyor'],
    specialOffer: {
      text: 'Güncel Bonus',
      bonusDescription:
        '30 $ risksiz hoş-geldin bonusu + ilk depozitoya %50'ye varan ek avantaj.'
    },
    minDeposit: '5 USD',
    website: 'xm.com',
    regulator: 'ASIC, CySEC, FCA, FSP',
    spread: 'Düşük',
    leverage: '1:1000',
    turkishSupport: 'Var',
    negativeBal: 'Var',
    ratings: {
      fastWithdrawal: 8.5,
      licensed: 8.5,
      support: 8.5,
      lowSpread: 8.5,
      reliable: 8.5
    }
  },

  /* ---------- 4. EXNESS ---------- */
  {
    id: 4,
    name: 'Exness',
    logo: brokerLogos.exness,
    description:
      'Exness, ultra yüksek 1:2000 kaldıraç ve rekabetçi spreadleriyle öne çıkan global bir forex brokerıdır.',
    rating: 8.3,
    userRatings: 1_780,
    bestFor: 'Yüksek Kaldıraç',
    pros: [
      '1:2000'e kadar kaldıraç',
      'Düşük spread',
      'Geniş ürün yelpazesi',
      'Hızlı emir yürütme',
      'FCA & CySEC lisansları'
    ],
    cons: ['Türkçe destek bulunmuyor'],
    specialOffer: {
      text: 'Güncel Bonus',
      bonusDescription:
        'Yeni hesaplara özel %40 depozito bonusu + komisyonsuz işlem ayrıcalığı.'
    },
    minDeposit: '10 USD',
    website: 'exness.com',
    regulator: 'FCA, CySEC, FSA',
    spread: 'Düşük',
    leverage: '1:2000',
    turkishSupport: 'Yok',
    negativeBal: 'Var',
    ratings: {
      fastWithdrawal: 8,
      licensed: 8.5,
      support: 8,
      lowSpread: 8,
      reliable: 9
    }
  },

  /* ---------- 5. FXTM ---------- */
  {
    id: 5,
    name: 'FXTM',
    logo: brokerLogos.fxtm,
    description:
      'FXTM, FCA ve CySEC lisansları, 1:1000 kaldıraç ve zengin eğitim materyalleriyle dünya genelinde öne çıkan bir brokerdır.',
    rating: 8.1,
    userRatings: 1_350,
    bestFor: 'Eğitim Kaynakları',
    pros: [
      'CySEC & FCA lisanslı',
      'Zengin eğitim içerikleri',
      'Düşük spread & yüksek kaldıraç',
      'Çeşitli hesap türleri (Standard, ECN, Cent)',
      'MetaTrader 4 & 5 desteği'
    ],
    cons: ['Türkçe destek yok'],
    specialOffer: {
      text: 'Güncel Bonus',
      bonusDescription: '%30 hoş-geldin bonusu + 250 $'a kadar nakit iade.'
    },
    minDeposit: '50 USD',
    website: 'fxtm.com',
    regulator: 'CySEC, FCA, FSC',
    spread: 'Düşük',
    leverage: '1:1000',
    turkishSupport: 'Yok',
    negativeBal: 'Var',
    ratings: {
      fastWithdrawal: 7.5,
      licensed: 8.5,
      support: 7.5,
      lowSpread: 8,
      reliable: 9
    }
  }
];

export default brokerData;