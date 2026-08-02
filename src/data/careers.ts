const COUNT = 6;

export const careers: Career[] = Array.from({ length: COUNT }, (_, i) => ({
  roleKey: `aboutPage.career.items.${i}.role`,
  periodKey: `aboutPage.career.items.${i}.period`,
  companyKey: `aboutPage.career.items.${i}.company`,
  descriptionKey: `aboutPage.career.items.${i}.description`,
}));

interface Career {
  roleKey: string;
  periodKey: string;
  companyKey: string;
  descriptionKey: string;
}

export type { Career };
