type TranslationKey = 
  | 'home'
  | 'about'
  | 'services'
  | 'service1'
  | 'service2'
  | 'service3'
  | 'loginDiscord'
  | 'whyChooseUs'
  | 'creativeDesigns'
  | 'fastDelivery'
  | 'innovativeIdeas'
  | 'clientCollaboration'
  | 'ourPlans'
  | 'basicPlan'
  | 'proPlan'
  | 'enterprisePlan'
  | 'selectPlan'
  | 'faq'
  | 'privacyPolicy'
  | 'buyingAgreement'
  | 'welcomeToNajma'
  | 'welcomeMessage1'
  | 'welcomeMessage2';

type TranslationDictionary = {
  [key in TranslationKey]: string;
};

const translations: { [key: string]: TranslationDictionary } = {
  en: {
    home: 'Panel',
    about: 'Billing',
    services: 'Contact Us',
    service1: 'Discord',
    service2: 'Instagram',
    service3: 'X - Twitter',
    loginDiscord: 'Login with Discord',
    whyChooseUs: 'Why Choose Us?',
    creativeDesigns: 'Creative Panels',
    fastDelivery: 'Fast Delivery',
    innovativeIdeas: 'Innovative Ideas',
    clientCollaboration: 'Client Collaboration',
    ourPlans: 'Our Plans',
    basicPlan: 'Basic Plan',
    proPlan: 'Pro Plan',
    enterprisePlan: 'Enterprise Plan',
    selectPlan: 'Select',
    faq: 'Frequently Asked Questions',
    privacyPolicy: 'Privacy Policy',
    buyingAgreement: 'Buying Agreement',
    welcomeToNajma: 'Welcome to Najma Host',
    welcomeMessage1: "We're crafting something extraordinary for you. Our team of cosmic developers is working tirelessly to bring you an out-of-this-world experience.",
    welcomeMessage2: 'Stay tuned and prepare for launch. The countdown has begun!',
  },
  ar: {
    home: 'اللوحة',
    about: 'المتحر',
    services: 'تواصل معنا',
    service1: 'ديسكورد',
    service2: 'انستقرام',
    service3: 'تويتر',
    loginDiscord: 'تسجيل الدخول عبر ديسكورد',
    whyChooseUs: 'لماذا تختارنا؟',
    creativeDesigns: 'لوحة تحكم إبداعية',
    fastDelivery: 'تسليم سريع',
    innovativeIdeas: 'أفكار مبتكرة',
    clientCollaboration: 'تعاون مع العملاء',
    ourPlans: 'خططنا',
    basicPlan: 'الخطة الأساسية',
    proPlan: 'الخطة الاحترافية',
    enterprisePlan: 'خطة المؤسسات',
    selectPlan: 'اختر',
    faq: 'الأسئلة الشائعة',
    privacyPolicy: 'سياسة الخصوصية',
    buyingAgreement: 'اتفاقية الشراء',
    welcomeToNajma: 'مرحبًا بك في نجمة هوست',
    welcomeMessage1: 'نحن نصنع شيئًا استثنائيًا من أجلك. يعمل فريقنا من المطورين الكونيين بلا كلل لتقديم تجربة خارج هذا العالم لك.',
    welcomeMessage2: 'ابق على اطلاع واستعد للإطلاق. بدأ العد التنازلي!',
  },
};

export const useTranslations = (language: string) => {
  return translations[language] || translations.en;
};