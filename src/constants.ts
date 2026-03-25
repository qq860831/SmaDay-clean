import { ShieldCheck, ThumbsUp, Calendar, FileText, Zap, Shield } from 'lucide-react';

export const SERVICES = [
  {
    id: 'split-ac',
    title: '分離式冷氣',
    subtitle: '',
    price: 2099,
    originalPrice: 2500,
    duration: '約 1.5 ~ 2 小時',
    frequency: '建議每年清洗 1~2 次',
    benefits: '去除黴菌與過敏原，改善室內空氣品質，降低呼吸道疾病風險',
    category: '冷氣清洗',
    highlight: true,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'transformer-ac',
    title: '變形金剛系列',
    subtitle: '機型限定 PX、QX、RX、LX',
    price: 3199,
    originalPrice: 3500,
    duration: '約 2 ~ 2.5 小時',
    frequency: '建議每年清洗 1~2 次',
    benefits: '深層拆洗特殊機型，恢復冷房效率，有效節省電費支出',
    category: '冷氣清洗',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ceiling-ac',
    title: '吊隱式冷氣',
    subtitle: '',
    price: 3199,
    originalPrice: 3500,
    duration: '約 2.5 ~ 3 小時',
    frequency: '建議每年清洗 1 次',
    benefits: '清除管線內累積的灰塵黴菌，避免中央空調交叉感染',
    category: '冷氣清洗',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vertical-washer',
    title: '直立式洗衣機',
    subtitle: '',
    price: 1899,
    originalPrice: 2300,
    duration: '約 1.5 ~ 2 小時',
    frequency: '建議每 6~12 個月清洗 1 次',
    benefits: '去除洗衣槽內壁黴菌與汙垢，避免衣物二次汙染，呵護肌膚健康',
    category: '洗衣機清洗',
    highlight: true,
    image: 'https://images.unsplash.com/photo-1582733775062-eb9217dfd595?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drum-washer',
    title: '滾筒式洗衣機',
    subtitle: '',
    price: 3999,
    originalPrice: 4300,
    duration: '約 2.5 ~ 3 小時',
    frequency: '建議每 6~12 個月清洗 1 次',
    benefits: '深層清潔滾筒與膠圈，消除異味與細菌滋生，保護家人肌膚',
    category: '洗衣機清洗',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80'
  },
];

export const TESTIMONIALS = [
  {
    name: '小芸媽咪',
    role: '新手媽媽',
    avatar: '👩‍🍼',
    rating: 5,
    content: '自從請智樂家清洗冷氣後，寶寶晚上睡覺終於不再咳嗽了！之前一直以為是感冒，看了好幾次醫生都沒好，沒想到竟然是冷氣裡的黴菌在作怪。清洗後師傅給我看排出的髒水，真的嚇到了⋯⋯現在全家都呼吸得更安心，真心推薦給所有有小孩的家庭！',
    highlight: '寶寶終於不再咳嗽了',
    bgColor: '#14ccb9'
  },
  {
    name: '阿德',
    role: '省錢達人',
    avatar: '👨‍💼',
    rating: 5,
    content: '身為精打細算的人，我一開始覺得清洗費用不便宜。但清洗完後第一個月電費帳單出來，直接少了快 $400！冷氣變涼了，壓縮機也不用一直轉，算下來根本是幫自己省錢。而且師傅很專業，全程拆洗不到兩小時，CP 值超高！',
    highlight: '電費直接少了快 $400',
    bgColor: '#ff774d'
  },
  {
    name: 'Emily',
    role: '忙碌上班族',
    avatar: '👩‍💻',
    rating: 5,
    content: '平常加班到很晚根本沒時間處理家事，智樂家的預約超彈性，週末早上師傅準時到府，我還在喝咖啡他就開始拆洗了。清洗完打開冷氣那一刻，吹出來的風完全不一樣，清新到我以為換了一台新冷氣！重點是不用訂金、不滿意還能退費，超安心。',
    highlight: '清新到以為換了新冷氣',
    bgColor: '#14ccb9'
  },
];

export const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: '認證技師，清洗更專業',
    desc: '每位技師皆通過國家級認證考核標準，嚴格培訓後才正式上工服務。',
    color: '#14ccb9'
  },
  {
    icon: ThumbsUp,
    title: '不滿意全額退費',
    desc: '兩個月內不滿意全額退費，臨時取消不收取任何費用，零風險體驗。',
    color: '#ff774d'
  },
  {
    icon: Calendar,
    title: '彈性預約清洗時間',
    desc: '生活繁忙也能輕鬆預約，無須訂金，隨時更換時間，方便又自在。',
    color: '#14ccb9'
  },
  {
    icon: FileText,
    title: '線上價目表，價格透明',
    desc: '提供完整線上估價系統，所有費用一目了然，絕無隱藏收費。',
    color: '#ff774d'
  },
  {
    icon: Zap,
    title: '中性洗劑，安全不殘留',
    desc: '使用 EPA 認證無毒環保洗劑，取代傳統化學藥劑，對家人與毛孩零負擔。',
    color: '#14ccb9'
  },
  {
    icon: Shield,
    title: '清洗後保固 60 天',
    desc: '享有業界最長售後保固 60 天，遇到問題一通電話立即為您解決。',
    color: '#ff774d'
  }
];

