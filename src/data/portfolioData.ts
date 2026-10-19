import { ProjectItem, ServiceItem, StrategyPillar, FAQItem } from '../types/portfolio';
import seyeAvatar from '../assets/images/seye_avatar.png';
import projectLandingPage from '../assets/images/project_landing_page.png';
import projectSalesFunnel from '../assets/images/project_sales_funnel.webp';
import projectBrandSite from '../assets/images/project_brand_site.png';
import projectConversionPage from '../assets/images/project_conversion_page.webp';

export const SITE_INFO = {
  name: 'Somefun Seye',
  tagline: 'Websites · Funnels · AI Assistants',
  headline: 'Turn clicks into clients with a website that actually converts',
  heroDescription:
    'I help businesses create websites that don’t just look good — they generate leads, drive sales, and work hand-in-hand with AI virtual assistants to engage your audience around the clock.',
  aboutHeading: "Hi, I'm Somefun Seye. I help brands stop losing leads.",
  aboutText1:
    'I design high-converting websites, build sales funnels that sell, and create AI chatbots and virtual assistants that handle inquiries, qualify leads, and book appointments automatically.',
  aboutText2:
    'If you want a clean online presence that doesn’t just look good but actually brings revenue — you’re in the right place.',
  avatar: seyeAvatar,
  location: 'Lagos, Nigeria & Worldwide',
  calendlyUrl: 'https://calendly.com/somefunseye9/',
  whatsappUrl: 'https://wa.me/message/NAVQYN7PDPCJG1',
  behanceUrl: 'https://www.behance.net/somefunseye_digitals',
  email: 'somefunseye9@gmail.com',
};


export const KEY_METRICS = [
  {
    value: '50+',
    label: 'PROJECTS SHIPPED WORLDWIDE',
    color: 'text-red-500 dark:text-red-400',
  },
  {
    value: '24/7',
    label: 'AI ASSISTANT RESPONSE TIME',
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    value: '+40%',
    label: 'AVERAGE CLIENT LEAD LIFT',
    color: 'text-amber-500 dark:text-amber-400',
  },
  {
    value: '100%',
    label: 'CONVERSION-DRIVEN ARCHITECTURE',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
];

export const MARQUEE_ITEMS = [
  'High-Converting Websites',
  'Sales Funnels',
  'AI Chatbots',
  'Virtual Assistants',
  'Landing Pages',
  'Lead Automation',
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Your website should be more than an online brochure — it should be your #1 salesperson. I build conversion-optimized sites with clear CTAs, tight navigation, and responsive design.',
    highlights: ['Conversion-optimized design', 'Clear high-intent CTAs', 'Mobile-first responsiveness', 'Rapid page load speed'],
  },
  {
    number: '02',
    title: 'Sales Funnels',
    description:
      'A great funnel takes visitors on a clear journey from discovery to purchase. I create automated funnels that turn interest into action, and action into revenue.',
    highlights: ['Multi-step customer journeys', 'High-converting checkout flows', 'Automated follow-up triggers', 'A/B testable architectures'],
  },
  {
    number: '03',
    title: 'AI Virtual Assistant',
    description:
      'Never lose a lead again. I set up AI assistants that answer questions, book appointments, qualify leads, and follow up automatically — 24/7.',
    highlights: ['24/7 instant client support', 'Automated appointment booking', 'Lead qualification & routing', 'Calendar integration'],
  },
  {
    number: '04',
    title: 'AI Chatbot',
    description:
      'From first interaction to final conversion, my AI chatbots handle conversations seamlessly so your business feels professional and responsive at all times.',
    highlights: ['Natural conversational flow', 'Overcomes sales objections', 'Captures visitor emails/phones', 'Multi-channel deployment'],
  },
];

export const COMPARISON_DATA = {
  title: 'The Outdated Approach',
  subtitle:
    'Most service websites are designed for appearance, not performance. Don’t settle for design that impresses but doesn’t convert.',
  liability: {
    badge: 'THE LIABILITY',
    title: 'A pretty site that doesn’t sell.',
    description:
      'Blending in is bad for business. Most agencies build websites that look decent but don’t actually help you sell your services or generate booked calls.',
    points: ['No conversion strategy', 'Weak messaging & CTAs', 'Zero automation'],
  },
  asset: {
    badge: 'THE ASSET',
    title: 'A revenue engine that runs 24/7.',
    description:
      'Your website should be your strongest sales tool — working around the clock to convert visitors into paying clients. If it isn’t generating revenue, it’s costing you money.',
    points: [
      'Conversion-first architecture',
      'Funnels that follow up automatically',
      'AI assistants that book calls',
    ],
  },
};

export const STRATEGY_PILLARS: StrategyPillar[] = [
  {
    number: '01',
    title: 'Clever Approach',
    description:
      'Nothing left to chance. Every page is designed with proven conversion strategies that guide visitors to take action effortlessly.',
  },
  {
    number: '02',
    title: 'Upscale Branding',
    description:
      'Premium visual identity that positions you above competitors — so pricing objections disappear before the call.',
  },
  {
    number: '03',
    title: 'Growth-Focused',
    description:
      'Every button and section is intentional. We prioritize what actually moves the needle: booked calls, qualified leads, revenue.',
  },
];

export const PAST_PROJECTS: ProjectItem[] = [
  {
    id: 'landing-page',
    title: 'High-Converting Landing Page',
    category: 'Landing Page',
    image: projectLandingPage,
    description:
      'Conversion-engineered landing page designed with strong value propositions, frictionless lead capture forms, and dynamic mobile responsiveness.',
    behanceUrl: 'https://www.behance.net/somefunseye_digitals',
    tag: 'CASE STUDY',
  },
  {
    id: 'sales-funnel',
    title: 'Automated Sales Funnel',
    category: 'Sales Funnel',
    image: projectSalesFunnel,
    description:
      'End-to-end multi-step funnel capturing prospect interest, handling objections, and routing qualified leads into high-ticket sales calls.',
    behanceUrl: 'https://www.behance.net/somefunseye_digitals',
    tag: 'CASE STUDY',
  },
  {
    id: 'brand-site',
    title: 'Authority Brand Site',
    category: 'Brand Site',
    image: projectBrandSite,
    description:
      'Comprehensive brand website pairing premium visual aesthetics with conversion-first layout hierarchies to elevate perceived market value.',
    behanceUrl: 'https://www.behance.net/somefunseye_digitals',
    tag: 'CASE STUDY',
  },
  {
    id: 'conversion-page',
    title: 'Lead Conversion Portal',
    category: 'Conversion Page',
    image: projectConversionPage,
    description:
      'Targeted lead generation page integrated with automated chatbot assistance and instant calendar scheduling workflows.',
    behanceUrl: 'https://www.behance.net/somefunseye_digitals',
    tag: 'CASE STUDY',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Why is my website not converting visitors into clients?',
    answer:
      'Many websites look good but lack conversion structure — clear messaging, strong CTAs, trust elements, and proper page flow. A conversion-focused design guides visitors to take action, not just browse.',
  },
  {
    question: 'I’m getting traffic but no leads — what’s wrong?',
    answer:
      'This usually happens when there’s no lead capture system: funnels, forms, incentives, follow-up automation. Without a funnel, visitors come and leave with no next step.',
  },
  {
    question: 'Do I really need a sales funnel if I already have a website?',
    answer:
      'Yes — a website informs, but a funnel sells. Funnels lead people through steps (interest → trust → action), making it easier to generate leads and close sales.',
  },
  {
    question: 'How can I automate responses to customer inquiries without hiring staff?',
    answer:
      'AI Virtual Assistants and chatbots respond instantly, answer FAQs, collect customer info, and route leads — 24/7 — without manual work.',
  },
  {
    question: 'Can an AI chatbot actually help me get more sales?',
    answer:
      'Yes. A well-built chatbot qualifies leads, recommends services, overcomes objections, and books calls automatically. It turns conversations into conversions.',
  },
  {
    question: 'Why are people abandoning my funnel or not completing checkout?',
    answer:
      'Weak copy, too many steps, slow pages, poor mobile layout, missing trust signals, or unclear pricing. Funnel optimization fixes friction and increases completion rates.',
  },
  {
    question: 'How do I stop losing leads after they contact me?',
    answer:
      'Most businesses lose leads because there’s no follow-up. Automation (email/SMS/WhatsApp sequences + AI support) nurtures, reminds, and guides leads until they buy.',
  },
];
