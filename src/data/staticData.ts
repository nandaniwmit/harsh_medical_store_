import { ServiceItem, ProductItem, GalleryItem, ReviewItem, FAQItem, HealthTipItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Prescription Medicines',
    description: '100% genuine prescription medicines dispensed by qualified pharmacists with strict quality checks.',
    category: 'Prescription Medicines',
    iconName: 'FileText',
    detailedDescription: 'At Harsh Medical Store, your health is our priority. We stock a comprehensive range of prescription medicines spanning cardiology, diabetology, pulmonology, neurology, gastroenterology, and more. All drugs are sourced directly from authorized company distributors, ensuring 100% authenticity and optimal temperature-controlled storage.'
  },
  {
    id: 'srv-2',
    title: 'OTC Medicines & Remedies',
    description: 'Fast, reliable over-the-counter relief for common ailments like colds, flu, fever, allergy, and pain.',
    category: 'OTC Medicines',
    iconName: 'Pill',
    detailedDescription: 'Find a wide array of over-the-counter (OTC) medicines for daily healthcare needs. From pain relievers (like Dolo, Crocin), cough syrups, antacids, digestive enzymes, to allergy remedies. Our friendly staff can assist you in finding the right OTC solution safely.'
  },
  {
    id: 'srv-3',
    title: 'Health Devices & Equipment',
    description: 'High-quality digital blood pressure monitors, glucose meters, nebulizers, thermometers, and pulse oximeters.',
    category: 'Health Devices',
    iconName: 'Activity',
    detailedDescription: 'Monitor your vital signs accurately at home. We offer certified diagnostic devices from world-class brands like Omron, Accu-Chek, and Dr. Trust. These include digital BP monitors, glucometers, nebulizers, vaporizers, digital thermometers, and pulse oximeters, complete with manufacturer warranties.'
  },
  {
    id: 'srv-4',
    title: 'Medical Equipment & Surgicals',
    description: 'Essential surgical supplies, bandages, surgical gloves, syringes, IV sets, and mobility supports.',
    category: 'Medical Equipment',
    iconName: 'Stethoscope',
    detailedDescription: 'We provide specialized medical equipment and surgical consumables for clinical use and home care setups. Our inventory includes crutches, wheel-chairs, walking sticks, ortho-belts, cervical collars, knee supports, sterile dressings, adhesive tapes, syringes, and clinical disposables.'
  },
  {
    id: 'srv-5',
    title: 'Baby Care Essentials',
    description: 'Dermatologically tested baby skincare, baby food, specialized diapers, wipes, and pediatric essentials.',
    category: 'Baby Care',
    iconName: 'Baby',
    detailedDescription: 'Keep your little one healthy and happy. We stock trusted pediatric brands like Himalaya Baby, Johnson’s, Pampers, Huggies, Lactogen, and Nan Pro. Our range includes baby formula, gentle baby soaps, shampoos, massage oils, diapers, rash creams, and pediatrician-approved hygiene essentials.'
  },
  {
    id: 'srv-6',
    title: 'Personal Care & Hygiene',
    description: 'Top-tier skin care, oral care, hair care, hand sanitizers, and daily personal hygiene products.',
    category: 'Personal Care',
    iconName: 'ShieldAlert',
    detailedDescription: 'Daily grooming and hygiene products from leading brands. Find premium oral hygiene kits, herbal and medicated soaps, facial cleansers, body washes, sanitizers, handwashes, adult diapers, sanitary napkins, and medicated shampoos for comprehensive hygiene.'
  },
  {
    id: 'srv-7',
    title: 'Nutritional Supplements',
    description: 'Protein powders, multivitamin tablets, calcium tablets, fish oils, and health drinks for all age groups.',
    category: 'Supplements',
    iconName: 'Apple',
    detailedDescription: 'Fuel your active lifestyle with our verified health supplements. We offer a wide range of vitamins, minerals, protein drinks (Ensure, Protinex), weight management supplements, fish oil capsules, herbal formulations, and immunity-boosting wellness formulations.'
  },
  {
    id: 'srv-8',
    title: 'Elderly & Home Care',
    description: 'Specialized products designed to support comfortable home care for elderly and bedridden patients.',
    category: 'Home Care',
    iconName: 'HeartHandshake',
    detailedDescription: 'Providing specialized comfort and medical care at home for seniors and recovering patients. We supply premium adult diapers, underpads, anti-decubitus air mattresses (air beds for bedsores), walking frames, hot water bags, and home sanitization supplies.'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Omron HEM 7120 BP Monitor',
    mrp: 2450.00,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80',
    category: 'Health Devices',
    rating: 4.8,
    badge: 'Popular'
  },
  {
    id: 'prod-2',
    title: 'Ensure Chocolate Health Drink (400g)',
    mrp: 680.00,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80',
    category: 'Supplements',
    rating: 4.6
  },
  {
    id: 'prod-3',
    title: 'Dettol Antiseptic Liquid (500ml)',
    mrp: 215.00,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80',
    category: 'Personal Care',
    rating: 4.9,
    badge: 'Best Seller'
  },
  {
    id: 'prod-4',
    title: 'Revital H Multivitamin (30 Capsules)',
    mrp: 350.00,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?auto=format&fit=crop&w=400&q=80',
    category: 'Supplements',
    rating: 4.5
  },
  {
    id: 'prod-5',
    title: 'Himalaya Baby Powder (200g)',
    mrp: 160.00,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
    category: 'Baby Care',
    rating: 4.7
  },
  {
    id: 'prod-6',
    title: 'Accu-Chek Active Glucose Monitor',
    mrp: 1599.00,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    category: 'Health Devices',
    rating: 4.7,
    badge: 'Essential'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Ramesh Kumar Singh',
    text: 'Harsh Medical Store is the most reliable pharmacy in the Chadauti Block area. They always have the medicines prescribed by the doctor, and the staff is extremely helpful. They even explained the dosage to my elderly father carefully.',
    rating: 5,
    date: '2026-06-15',
    isGoogleReview: true
  },
  {
    id: 'rev-2',
    name: 'Pooja Kumari',
    text: 'Very satisfied with their service. I ordered baby products and prescription medicines through WhatsApp, and they kept my order ready for quick pickup. It is located conveniently near Chadauti Block in Gaya.',
    rating: 5,
    date: '2026-07-01',
    isGoogleReview: true
  },
  {
    id: 'rev-3',
    name: 'Anil Prasad Gupta',
    text: 'Genuine medicines and very fair pricing. They stock everything from rare life-saving medicines to standard OTC drugs and digital health monitors. Strongly recommended for everyone in Narayan Garh, Gaya.',
    rating: 4.8,
    date: '2026-07-12',
    isGoogleReview: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Harsh Medical Store located?',
    answer: 'We are situated at Narayan Garh, Near Chadauti Block, Gaya, Bihar - 823001. Our location is highly accessible with parking available.'
  },
  {
    question: 'How can I order medicines on WhatsApp?',
    answer: 'Simply use our WhatsApp Order Form on the website or click the floating WhatsApp button. Fill in your details, list your medicines, upload your doctor’s prescription if required, and click "Send via WhatsApp". It will instantly format a message for you to send to us at 07903501563.'
  },
  {
    question: 'Do you sell life-saving and chronic prescription drugs?',
    answer: 'Yes, we stock a wide array of prescription drugs for heart disease, diabetes, asthma, thyroid issues, and more. A valid doctor’s prescription is mandatory for prescription medicines.'
  },
  {
    question: 'Are the health devices like BP and sugar monitors authentic?',
    answer: 'Absolutely. All our health monitoring devices (like Omron BP monitors and Accu-Chek glucometers) are 100% genuine and come directly from authorized brand partners with official brand warranties.'
  },
  {
    question: 'What are the store working hours?',
    answer: 'Our store is open from 08:00 AM to 10:00 PM every day (Monday to Sunday) to serve your emergency healthcare needs.'
  },
  {
    question: 'Can I check medicine availability before visiting?',
    answer: 'Yes, you can search for medicines on our "Services" page using our interactive Live Medicine Stock Checker, which queries our real-time inventory instantly.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Pharmacy Store Front',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'Harsh Medical Store entrance located near Chadauti Block, Gaya, Bihar.'
  },
  {
    id: 'gal-2',
    title: 'Organized Medicine Shelves',
    category: 'shelves',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&w=800&q=80',
    description: 'Carefully sorted and cataloged medicines to ensure speedy and accurate dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Premium Healthcare Products',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive display of baby care, hygiene products, and health supplements.'
  },
  {
    id: 'gal-4',
    title: 'Digital Diagnostics Section',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    description: 'Omron BP Monitors, glucometers, and other medical diagnostic devices on display.'
  },
  {
    id: 'gal-5',
    title: 'Temperature Controlled Storage',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
    description: 'Proper refrigeration setup for insulin, vaccines, and sensitive antibiotic injections.'
  },
  {
    id: 'gal-6',
    title: 'OTC Cold & Allergy Stand',
    category: 'shelves',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Easy-to-browse display of pain-relief ointments, cough lozenges, and emergency OTC kits.'
  }
];

export const HEALTH_TIPS: HealthTipItem[] = [
  {
    id: 'tip-1',
    title: 'Understanding Diabetes and Glycemic Index',
    category: 'Chronic Care',
    description: 'How simple dietary adjustments can keep your blood glucose levels in check and prevent spikes.',
    date: '2026-07-20',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tip-2',
    title: 'Essential Vaccines for Toddlers & Infants',
    category: 'Baby Health',
    description: 'A comprehensive guide to immunization milestones and preparing your baby for vaccinations.',
    date: '2026-07-24',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tip-3',
    title: 'Boosting Immunity Naturally in Monsoon Season',
    category: 'Wellness',
    description: 'Simple and effective Ayurvedic and modern vitamins to support your immune system during damp months.',
    date: '2026-07-27',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?auto=format&fit=crop&w=400&q=80'
  }
];
