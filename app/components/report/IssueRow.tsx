import { Severity } from "@/app/types/report";

interface IssueRowProps {
  label: string;
  severity: Severity;
  detail?: string;
}

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-400",
};

export default function IssueRow({ label, severity, detail }: IssueRowProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0">
      <span
        className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${SEVERITY_COLORS[severity]}`}
      />
      <div className="min-w-0">
        <p className="text-white font-medium text-sm">{label}</p>
        {detail && <p className="text-white/50 text-xs mt-0.5">{detail}</p>}
      </div>
    </div>
  );
}
