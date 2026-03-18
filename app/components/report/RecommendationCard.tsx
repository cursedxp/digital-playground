import { ServiceInfo } from "@/app/lib/services";
import { Check } from "lucide-react";

interface RecommendationCardProps {
  service: ServiceInfo;
  reason: string;
}

export default function RecommendationCard({ service, reason }: RecommendationCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{reason}</p>
      <ul className="space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
