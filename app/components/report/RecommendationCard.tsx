import { ServiceInfo } from "@/app/lib/services";

interface RecommendationCardProps {
  service: ServiceInfo;
  reason: string;
}

export default function RecommendationCard({ service, reason }: RecommendationCardProps) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
      <p className="text-sm text-white/70 mb-4 leading-relaxed">{reason}</p>
      <ul className="space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-white/80">
            <span className="mt-0.5 shrink-0" style={{ color: "#FFE028" }}>✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
