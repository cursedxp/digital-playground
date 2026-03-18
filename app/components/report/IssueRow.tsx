import { Severity } from "@/app/types/report";

interface IssueRowProps {
  label: string;
  severity: Severity;
  detail?: string;
}

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

const SEVERITY_LABELS: Record<Severity, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Info",
};

export default function IssueRow({ label, severity, detail }: IssueRowProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <span
        className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${SEVERITY_COLORS[severity]}`}
        title={SEVERITY_LABELS[severity]}
      />
      <div className="min-w-0">
        <p className="text-gray-900 font-medium text-sm">{label}</p>
        {detail && <p className="text-gray-500 text-xs mt-0.5">{detail}</p>}
      </div>
    </div>
  );
}
