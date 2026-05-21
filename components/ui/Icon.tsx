import {
  Layers,
  AlertCircle,
  GitBranch,
  TrendingDown,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Building2,
  Rocket,
  Network,
  GraduationCap,
  HandHeart,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Layers,
  AlertCircle,
  GitBranch,
  TrendingDown,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Building2,
  Rocket,
  Network,
  GraduationCap,
  HandHeart,
  Users,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden="true" />;
}
