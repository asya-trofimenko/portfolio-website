export type ProjectCategory = 'uiux' | 'marketing';

export const projects: Project[] = [
  {
    slug: 'flow',
    titleKey: 'projects.items.flow.title',
    descriptionKey: 'projects.items.flow.description',
    image: '/images/projects/flow.jpg',
    categories: ['uiux'],
  },
  {
    slug: 'tiptap',
    titleKey: 'projects.items.tiptap.title',
    descriptionKey: 'projects.items.tiptap.description',
    image: '/images/projects/tiptap.jpg',
    badgeKey: 'projects.items.tiptap.badge',
    categories: ['uiux'],
  },
  {
    slug: 'socialtrait',
    titleKey: 'projects.items.socialtrait.title',
    descriptionKey: 'projects.items.socialtrait.description',
    image: '/images/projects/socialtrait.jpg',
    badgeKey: 'projects.items.socialtrait.badge',
    categories: ['uiux', 'marketing'],
  },
  {
    slug: 'whales-marketing',
    titleKey: 'projects.items.whalesMarketing.title',
    descriptionKey: 'projects.items.whalesMarketing.description',
    image: '/images/projects/whales-marketing.jpg',
    badgeKey: 'projects.items.whalesMarketing.badge',
    categories: ['uiux'],
  },
  {
    slug: 'vulpes-tech',
    titleKey: 'projects.items.vulpesTech.title',
    descriptionKey: 'projects.items.vulpesTech.description',
    image: '/images/projects/vulpes-tech.jpg',
    badgeKey: 'projects.items.vulpesTech.badge',
    categories: ['uiux'],
  },
  {
    slug: 'profit-whales',
    titleKey: 'projects.items.profitWhales.title',
    descriptionKey: 'projects.items.profitWhales.description',
    image: '/images/projects/profit-whales.jpg',
    badgeKey: 'projects.items.profitWhales.badge',
    categories: ['uiux'],
  },
  {
    slug: 'concepto',
    titleKey: 'projects.items.concepto.title',
    descriptionKey: 'projects.items.concepto.description',
    image: '/images/projects/concepto.jpg',
    badgeKey: 'projects.items.concepto.badge',
    categories: ['marketing'],
  },
  {
    slug: 'illuscriber',
    titleKey: 'projects.items.illuscriber.title',
    descriptionKey: 'projects.items.illuscriber.description',
    image: '/images/projects/illuscriber.jpg',
    badgeKey: 'projects.items.illuscriber.badge',
    categories: ['uiux'],
  },
];

interface Project {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  badgeKey?: string;
  categories: ProjectCategory[];
}

export type { Project };
