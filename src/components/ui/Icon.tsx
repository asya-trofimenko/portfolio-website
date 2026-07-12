import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import {
  Circle,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  ArrowUpRight,
  Handshake,
  Sprout,
  MessagesSquare,
  ListTodo,
  Star,
  Users,
  Menu,
  X,
  Globe,
  Scissors,
  Copy,
  LayoutGrid,
} from 'lucide-react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  circle: Circle,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  plus: Plus,
  minus: Minus,
  'arrow-up-right': ArrowUpRight,
  handshake: Handshake,
  sprout: Sprout,
  'messages-square': MessagesSquare,
  'list-todo': ListTodo,
  star: Star,
  users: Users,
  menu: Menu,
  close: X,
  globe: Globe,
  cut: Scissors,
  copy: Copy,
  layout: LayoutGrid,
};

export type IconName = keyof typeof iconMap;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

export default function Icon({
  name,
  size = 24,
  ...props
}: Readonly<IconProps>) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} {...props} />;
}
