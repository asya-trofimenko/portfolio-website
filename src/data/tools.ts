export const tools: ToolItem[] = [
  { name: 'Figma (advanced)', icon: 'figma' },
  { name: 'Adobe Photoshop', icon: 'photoshop' },
  { name: 'Untitled UI', icon: 'untitled-ui' },
  { name: 'Midjourney', icon: 'midjourney' },
  { name: 'Jitter', icon: 'jitter' },
  { name: 'Notion', icon: 'notion' },
  { name: 'ClickUp', icon: 'clickup' },
];

interface ToolItem {
  name: string;
  icon: string;
}

export type { ToolItem };
