export const expertise: ExpertiseItem[] = [
  {
    number: '01',
    titleKey: 'expertise.uiux.title',
    descriptionKey: 'expertise.uiux.description',
  },
  {
    number: '02',
    titleKey: 'expertise.marketing.title',
    descriptionKey: 'expertise.marketing.description',
  },
  {
    number: '03',
    titleKey: 'expertise.interfaceSystems.title',
    descriptionKey: 'expertise.interfaceSystems.description',
  },
  {
    number: '04',
    titleKey: 'expertise.productThinking.title',
    descriptionKey: 'expertise.productThinking.description',
  },
];

interface ExpertiseItem {
  number: string;
  titleKey: string;
  descriptionKey: string;
}

export type { ExpertiseItem };
