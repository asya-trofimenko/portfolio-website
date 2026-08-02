export const coreValues: CoreValue[] = [
  'handshake',
  'sprout',
  'messages-square',
  'list-todo',
  'star',
  'users',
].map((icon, i) => ({
  icon,
  titleKey: `aboutPage.coreValues.items.${i}.title`,
  descriptionKey: `aboutPage.coreValues.items.${i}.description`,
}));

interface CoreValue {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export type { CoreValue };
