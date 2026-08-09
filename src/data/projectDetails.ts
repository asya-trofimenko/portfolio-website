export type PhotoRow =
  | { type: 'single'; image: string }
  | { type: 'duo'; images: [string, string] };

export type ProjectBlock =
  | { type: 'overview'; textKey: string; image: string }
  | { type: 'photo-wrapper'; rows: PhotoRow[] }
  | { type: 'challenge'; itemKeys: string[] }
  | { type: 'solution'; titleKey: string; textKey: string }
  | { type: 'text-block'; titleKey: string; textKey: string }
  | {
      type: 'result';
      textKey: string;
      fullCaseUrl?: string;
      liveWebsiteUrl?: string;
    };

export interface ProjectDetail {
  slug: string;
  taglineKey: string;
  industryKey: string;
  serviceKey: string;
  heroVideo: string;
  heroPoster: string;
  fullCaseUrl?: string;
  liveWebsiteUrl?: string;
  blocks: ProjectBlock[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'nexton',
    taglineKey: 'projectDetail.nexton.tagline',
    industryKey: 'projectDetail.nexton.industry',
    serviceKey: 'projectDetail.nexton.service',
    heroVideo: '/videos/nexton.mp4',
    heroPoster: '/videos/posters/nexton.jpg',
    fullCaseUrl:
      'https://www.behance.net/gallery/252841105/Nexton-Mobile-Banking-App-FinTech',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.nexton.overview.text',
        image: '/images/projects/nexton/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.nexton.challenge.items.0',
          'projectDetail.nexton.challenge.items.1',
          'projectDetail.nexton.challenge.items.2',
          'projectDetail.nexton.challenge.items.3',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.nexton.solution.uiuxDesign.title',
        textKey: 'projectDetail.nexton.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/nexton/uiux-1.jpg',
              '/images/projects/nexton/uiux-2.jpg',
            ],
          },
          {
            type: 'duo',
            images: [
              '/images/projects/nexton/uiux-3.jpg',
              '/images/projects/nexton/uiux-4.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.nexton.result.text',
        fullCaseUrl:
          'https://www.behance.net/gallery/252841105/Nexton-Mobile-Banking-App-FinTech',
      },
    ],
  },
  {
    slug: 'tiptap',
    taglineKey: 'projectDetail.tiptap.tagline',
    industryKey: 'projectDetail.tiptap.industry',
    serviceKey: 'projectDetail.tiptap.service',
    heroVideo: '/videos/tiptap.mp4',
    heroPoster: '/videos/posters/tiptap.jpg',
    fullCaseUrl:
      'https://www.behance.net/gallery/236083209/QR-Payment-Platform-UIUX-Design',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.tiptap.overview.text',
        image: '/images/projects/tiptap/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.tiptap.challenge.items.0',
          'projectDetail.tiptap.challenge.items.1',
          'projectDetail.tiptap.challenge.items.2',
          'projectDetail.tiptap.challenge.items.3',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.tiptap.solution.visualIdentity.title',
        textKey: 'projectDetail.tiptap.solution.visualIdentity.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/tiptap/visual-identity-1.jpg',
              '/images/projects/tiptap/visual-identity-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey: 'projectDetail.tiptap.solution.uiuxDesign.title',
        textKey: 'projectDetail.tiptap.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          { type: 'single', image: '/images/projects/tiptap/uiux-wide.jpg' },
          {
            type: 'duo',
            images: [
              '/images/projects/tiptap/uiux-1.jpg',
              '/images/projects/tiptap/uiux-2.jpg',
            ],
          },
          {
            type: 'duo',
            images: [
              '/images/projects/tiptap/uiux-3.jpg',
              '/images/projects/tiptap/uiux-4.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.tiptap.result.text',
        fullCaseUrl:
          'https://www.behance.net/gallery/236083209/QR-Payment-Platform-UIUX-Design',
      },
    ],
  },
  {
    slug: 'socialtrait',
    taglineKey: 'projectDetail.socialtrait.tagline',
    industryKey: 'projectDetail.socialtrait.industry',
    serviceKey: 'projectDetail.socialtrait.service',
    heroVideo: '/videos/socialtrait.mp4',
    heroPoster: '/videos/posters/socialtrait.jpg',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.socialtrait.overview.text',
        image: '/images/projects/socialtrait/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.socialtrait.challenge.items.0',
          'projectDetail.socialtrait.challenge.items.1',
          'projectDetail.socialtrait.challenge.items.2',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.socialtrait.solution.uiuxDesign.title',
        textKey: 'projectDetail.socialtrait.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'single',
            image: '/images/projects/socialtrait/uiux-wide.jpg',
          },
          {
            type: 'duo',
            images: [
              '/images/projects/socialtrait/uiux-1.jpg',
              '/images/projects/socialtrait/uiux-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey: 'projectDetail.socialtrait.solution.marketingDesign.title',
        textKey: 'projectDetail.socialtrait.solution.marketingDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/socialtrait/marketing-1.jpg',
              '/images/projects/socialtrait/marketing-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.socialtrait.result.text',
      },
    ],
  },
  {
    slug: 'whales-marketing',
    taglineKey: 'projectDetail.whalesMarketing.tagline',
    industryKey: 'projectDetail.whalesMarketing.industry',
    serviceKey: 'projectDetail.whalesMarketing.service',
    heroVideo: '/videos/whales-marketing.mp4',
    heroPoster: '/videos/posters/whales-marketing.jpg',
    fullCaseUrl:
      'https://www.behance.net/gallery/208459769/Marketing-Agency-Website-UIUX-Design',
    liveWebsiteUrl: 'https://whales.marketing/',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.whalesMarketing.overview.text',
        image: '/images/projects/whales-marketing/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.whalesMarketing.challenge.items.0',
          'projectDetail.whalesMarketing.challenge.items.1',
          'projectDetail.whalesMarketing.challenge.items.2',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.whalesMarketing.solution.uiuxDesign.title',
        textKey: 'projectDetail.whalesMarketing.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'single',
            image: '/images/projects/whales-marketing/uiux-wide.jpg',
          },
          {
            type: 'duo',
            images: [
              '/images/projects/whales-marketing/uiux-1.jpg',
              '/images/projects/whales-marketing/uiux-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey:
          'projectDetail.whalesMarketing.solution.marketingDesign.title',
        textKey: 'projectDetail.whalesMarketing.solution.marketingDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/whales-marketing/marketing-1.jpg',
              '/images/projects/whales-marketing/marketing-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.whalesMarketing.result.text',
        fullCaseUrl:
          'https://www.behance.net/gallery/208459769/Marketing-Agency-Website-UIUX-Design',
        liveWebsiteUrl: 'https://whales.marketing/',
      },
    ],
  },
  {
    slug: 'vulpes-tech',
    taglineKey: 'projectDetail.vulpesTech.tagline',
    industryKey: 'projectDetail.vulpesTech.industry',
    serviceKey: 'projectDetail.vulpesTech.service',
    heroVideo: '/videos/vulpes-tech.mp4',
    heroPoster: '/videos/posters/vulpes-tech.jpg',
    fullCaseUrl:
      'https://www.behance.net/gallery/216427137/IT-Solutions-Website-Landing-Page',
    liveWebsiteUrl: 'https://vulpes-tech.net/',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.vulpesTech.overview.text',
        image: '/images/projects/vulpes-tech/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.vulpesTech.challenge.items.0',
          'projectDetail.vulpesTech.challenge.items.1',
          'projectDetail.vulpesTech.challenge.items.2',
          'projectDetail.vulpesTech.challenge.items.3',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.vulpesTech.solution.visualIdentity.title',
        textKey: 'projectDetail.vulpesTech.solution.visualIdentity.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/vulpes-tech/visual-identity-1.jpg',
              '/images/projects/vulpes-tech/visual-identity-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey: 'projectDetail.vulpesTech.solution.uiuxDesign.title',
        textKey: 'projectDetail.vulpesTech.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'single',
            image: '/images/projects/vulpes-tech/uiux-wide.jpg',
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.vulpesTech.result.text',
        fullCaseUrl:
          'https://www.behance.net/gallery/216427137/IT-Solutions-Website-Landing-Page',
        liveWebsiteUrl: 'https://vulpes-tech.net/',
      },
    ],
  },
  {
    slug: 'profit-whales',
    taglineKey: 'projectDetail.profitWhales.tagline',
    industryKey: 'projectDetail.profitWhales.industry',
    serviceKey: 'projectDetail.profitWhales.service',
    heroVideo: '/videos/profit-whales.mp4',
    heroPoster: '/videos/posters/profit-whales.jpg',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.profitWhales.overview.text',
        image: '/images/projects/profit-whales/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.profitWhales.challenge.items.0',
          'projectDetail.profitWhales.challenge.items.1',
          'projectDetail.profitWhales.challenge.items.2',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.profitWhales.solution.uiuxDesign.title',
        textKey: 'projectDetail.profitWhales.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/profit-whales/uiux-1.jpg',
              '/images/projects/profit-whales/uiux-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey: 'projectDetail.profitWhales.solution.marketingDesign.title',
        textKey: 'projectDetail.profitWhales.solution.marketingDesign.text',
      },
      {
        type: 'result',
        textKey: 'projectDetail.profitWhales.result.text',
      },
    ],
  },
  {
    slug: 'concepto',
    taglineKey: 'projectDetail.concepto.tagline',
    industryKey: 'projectDetail.concepto.industry',
    serviceKey: 'projectDetail.concepto.service',
    heroVideo: '/videos/concepto.mp4',
    heroPoster: '/videos/posters/concepto.jpg',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.concepto.overview.text',
        image: '/images/projects/concepto/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.concepto.challenge.items.0',
          'projectDetail.concepto.challenge.items.1',
          'projectDetail.concepto.challenge.items.2',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.concepto.solution.uiuxDesign.title',
        textKey: 'projectDetail.concepto.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/concepto/uiux-1.jpg',
              '/images/projects/concepto/uiux-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'text-block',
        titleKey: 'projectDetail.concepto.solution.marketingDesign.title',
        textKey: 'projectDetail.concepto.solution.marketingDesign.text',
      },
      {
        type: 'result',
        textKey: 'projectDetail.concepto.result.text',
      },
    ],
  },
  {
    slug: 'illuscriber',
    taglineKey: 'projectDetail.illuscriber.tagline',
    industryKey: 'projectDetail.illuscriber.industry',
    serviceKey: 'projectDetail.illuscriber.service',
    heroVideo: '/videos/illuscriber.mp4',
    heroPoster: '/videos/posters/illuscriber.jpg',
    liveWebsiteUrl: 'https://illuscriber.com/',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.illuscriber.overview.text',
        image: '/images/projects/illuscriber/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.illuscriber.challenge.items.0',
          'projectDetail.illuscriber.challenge.items.1',
          'projectDetail.illuscriber.challenge.items.2',
          'projectDetail.illuscriber.challenge.items.3',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.illuscriber.solution.uiuxDesign.title',
        textKey: 'projectDetail.illuscriber.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'single',
            image: '/images/projects/illuscriber/uiux-wide.jpg',
          },
          {
            type: 'duo',
            images: [
              '/images/projects/illuscriber/uiux-1.jpg',
              '/images/projects/illuscriber/uiux-2.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.illuscriber.result.text',
        liveWebsiteUrl: 'https://illuscriber.com/',
      },
    ],
  },
  {
    slug: 'flow',
    taglineKey: 'projectDetail.flow.tagline',
    industryKey: 'projectDetail.flow.industry',
    serviceKey: 'projectDetail.flow.service',
    heroVideo: '/videos/flow.mp4',
    heroPoster: '/videos/posters/flow.jpg',
    fullCaseUrl:
      'https://www.behance.net/gallery/245133751/Flow-Wellness-Healthcare-Mobile-Application',
    blocks: [
      {
        type: 'overview',
        textKey: 'projectDetail.flow.overview.text',
        image: '/images/projects/flow/overview.jpg',
      },
      {
        type: 'challenge',
        itemKeys: [
          'projectDetail.flow.challenge.items.0',
          'projectDetail.flow.challenge.items.1',
          'projectDetail.flow.challenge.items.2',
          'projectDetail.flow.challenge.items.3',
        ],
      },
      {
        type: 'solution',
        titleKey: 'projectDetail.flow.solution.uiuxDesign.title',
        textKey: 'projectDetail.flow.solution.uiuxDesign.text',
      },
      {
        type: 'photo-wrapper',
        rows: [
          {
            type: 'duo',
            images: [
              '/images/projects/flow/uiux-1.jpg',
              '/images/projects/flow/uiux-2.jpg',
            ],
          },
          {
            type: 'duo',
            images: [
              '/images/projects/flow/uiux-3.jpg',
              '/images/projects/flow/uiux-4.jpg',
            ],
          },
        ],
      },
      {
        type: 'result',
        textKey: 'projectDetail.flow.result.text',
        fullCaseUrl:
          'https://www.behance.net/gallery/245133751/Flow-Wellness-Healthcare-Mobile-Application',
      },
    ],
  },
];
