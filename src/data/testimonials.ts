export const testimonials: Testimonial[] = [
  {
    nameKey: 'testimonials.items.0.name',
    textKey: 'testimonials.items.0.text',
    role: 'Creative Direction',
    avatar: '/images/avatars/dima-gavrysh.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'concepto',
  },
  {
    nameKey: 'testimonials.items.1.name',
    textKey: 'testimonials.items.1.text',
    role: 'Software Developer',
    avatar: '/images/avatars/bohdan-mazur.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'vulpes-tech',
  },
  {
    nameKey: 'testimonials.items.2.name',
    textKey: 'testimonials.items.2.text',
    role: 'VP, Country Manager / Cluster Head',
    avatar: '/images/avatars/svitlana-chyrva.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'tiptap',
  },
  {
    nameKey: 'testimonials.items.3.name',
    textKey: 'testimonials.items.3.text',
    role: 'Digital Marketing Generalist',
    avatar: '/images/avatars/michael-herzberg.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'whales-marketing',
  },
  {
    nameKey: 'testimonials.items.4.name',
    textKey: 'testimonials.items.4.text',
    role: 'Marketing Manager',
    avatar: '/images/avatars/yana-filchenkova.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'whales-marketing',
  },
  {
    nameKey: 'testimonials.items.5.name',
    textKey: 'testimonials.items.5.text',
    role: 'Marketing Specialist',
    avatar: '/images/avatars/anna-chubatiuk.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'profit-whales',
  },
  {
    nameKey: 'testimonials.items.6.name',
    textKey: 'testimonials.items.6.text',
    role: 'Digital Marketing Manager',
    avatar: '/images/avatars/hanna-safonova.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
    projectSlug: 'whales-marketing',
  },
  {
    nameKey: 'testimonials.items.7.name',
    textKey: 'testimonials.items.7.text',
    role: 'IT Project Manager',
    avatar: '/images/avatars/ilona-fomina.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/anastasia-trofimenko/details/recommendations/',
  },
];

interface Testimonial {
  nameKey: string;
  textKey: string;
  role: string;
  avatar: string;
  linkedinUrl: string;
  projectSlug?: string;
}

export type { Testimonial };
