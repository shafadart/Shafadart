// Default projects data — admin panel will override this with localStorage
export const defaultProjects = [
  {
    id: 'anti-dopamine',
    title: 'Anti Dopamine 🔒',
    description: 'A military-grade phone detox app with offline cryptographic unlocking. Un-bypassable hard-lock system that survives reboots.',
    tag: 'COMMERCIAL APP 🛡️',
    tagColor: '#7c4dff',
    image: '/assets/dopamine.png',
    tech: [
      { icon: 'fa-brands fa-flutter', name: 'Flutter' },
      { icon: 'fa-solid fa-shield-halved', name: 'Cryptography' },
      { icon: 'fa-solid fa-fire', name: 'Firebase' },
    ],
    liveUrl: '',
    codeUrl: '',
    apkUrl: '/assets/Anti_Dopamine_v1.1.0.apk',
    caseStudyUrl: '/anti_dopamine',
    isSpecialGradient: true,
    gradientBg: 'linear-gradient(135deg, #0a0612 0%, #1a0f2e 35%, #2d1b69 100%)',
    gradientBorder: 'rgba(124, 77, 255, 0.35)',
  },
  {
    id: 0,
    title: 'ShohojBebsha (সহজব্যবসা) 💼',
    description: 'An all-in-one comprehensive business management SaaS platform designed to streamline inventory tracking, courier dispatch, and automated employee payroll, featuring an intelligent AI Business Analyst.',
    tag: 'FULL-STACK SAAS 💼',
    tagColor: '#c8a45e',
    image: '/assets/shohoj_mocup.png',
    tech: [
      { icon: 'fa-brands fa-react', name: 'Next.js' },
      { icon: 'fa-solid fa-fire', name: 'Firebase' },
      { icon: 'fa-brands fa-css3-alt', name: 'Tailwind CSS' },
    ],
    liveUrl: 'https://shohojbebsha-gamma.vercel.app/',
    codeUrl: 'https://github.com/shafadart',
    apkUrl: '',
    caseStudyUrl: '/shohojbebsha',
    isSpecialGradient: true,
    gradientBg: 'linear-gradient(135deg, #0f0a05 0%, #2a1a0e 35%, #4a2a15 100%)',
    gradientBorder: 'rgba(200, 164, 94, 0.35)',
  },
  {
    id: 1,
    title: 'Voice Overlay App 🎤',
    description: 'A futuristic utility app providing a floating bubble for real-time voice transformation. Built with high-performance audio processing.',
    tag: 'AI Powered 🤖',
    tagColor: '#c8a45e',
    image: '/assets/voice_app_mockup.png',
    tech: [
      { icon: 'fa-brands fa-flutter', name: 'Flutter' },
      { icon: 'fa-solid fa-microchip', name: 'FFmpeg API' },
    ],
    liveUrl: 'https://voice-changer-app-amber.vercel.app/',
    codeUrl: 'https://voice-changer-app-amber.vercel.app/',
    apkUrl: '',
    caseStudyUrl: '',
    isSpecialGradient: true,
    gradientBg: 'linear-gradient(135deg, #1a0f06 0%, #3a2010 35%, #6b3a1f 100%)',
    gradientBorder: 'rgba(200, 164, 94, 0.3)',
  },
  {
    id: 2,
    title: 'Adopt a Pet App 🐾',
    description: 'A complete mobile solution for pet adoption and rescue services. Features include real-time tracking, pet profiles, and seamless community connection.',
    tag: 'Showcase Project',
    tagColor: '#c47a30',
    image: '/assets/pet_app_homepage.jpeg',
    tech: [
      { icon: 'fa-brands fa-flutter', name: 'Flutter' },
      { icon: 'fa-solid fa-map-location-dot', name: 'Maps API' },
    ],
    liveUrl: '',
    codeUrl: '',
    apkUrl: '/assets/Adopt_a_Pet_BD.apk',
    caseStudyUrl: '/petapp',
    isSpecialGradient: false,
    visualBg: 'rgba(196, 122, 48, 0.06)',
  },
  {
    id: 3,
    title: 'BioLeaf 🌿',
    description: 'AI-powered plant identifier and care guide with Vastu tips. Powered by Google Gemini AI.',
    tag: 'Showcase Project',
    tagColor: '#8b6e3c',
    image: '/assets/bio1.png',
    tech: [
      { icon: 'fa-brands fa-flutter', name: 'Flutter' },
      { icon: 'fa-solid fa-brain', name: 'Gemini AI' },
    ],
    liveUrl: '',
    codeUrl: '',
    apkUrl: '/assets/BioLeaf.apk',
    caseStudyUrl: '/bioleaf',
    isSpecialGradient: false,
    visualBg: 'rgba(139, 110, 60, 0.06)',
  },
  {
    id: 4,
    title: 'Idiots Messenger 💬',
    description: 'An exclusive, encrypted messaging app built for my inner circle. It includes custom stickers, inside jokes, private servers, and a unique UI tailored for fun.',
    tag: 'Private Project',
    tagColor: '#c47a30',
    image: '/assets/idiots_messenger.png',
    tech: [
      { icon: 'fa-brands fa-flutter', name: 'Flutter' },
      { icon: 'fa-solid fa-shield-halved', name: 'Encrypted' },
      { icon: 'fa-solid fa-server', name: 'Dart' },
    ],
    liveUrl: '',
    codeUrl: '',
    apkUrl: '',
    caseStudyUrl: '',
    videoId: 'dQw4w9WgXcQ',
    isSpecialGradient: false,
    visualBg: 'linear-gradient(135deg, rgba(139, 90, 43, 0.1), rgba(80, 50, 25, 0.15))',
  },
];

// Version key — bump this when default data changes (theme update, etc.)
const PROJECTS_VERSION = 'v5_shohojbebsha';

export function getProjects() {
  if (typeof window === 'undefined') return defaultProjects;
  try {
    const version = localStorage.getItem('portfolio_projects_version');
    if (version !== PROJECTS_VERSION) {
      // Clear old cached projects so new theme colors apply
      localStorage.removeItem('portfolio_projects');
      localStorage.setItem('portfolio_projects_version', PROJECTS_VERSION);
      return defaultProjects;
    }
    const saved = localStorage.getItem('portfolio_projects');
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore */ }
  return defaultProjects;
}

export function saveProjects(projects) {
  localStorage.setItem('portfolio_projects', JSON.stringify(projects));
}
