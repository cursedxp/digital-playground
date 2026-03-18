import { SEOData } from "@/app/types/report";

interface SEOSectionProps {
  seo: SEOData;
  title: string;
  description: string;
}

function charCountColor(count: number, good: [number, number], bad: [number, number]): string {
  if (count >= good[0] && count <= good[1]) return "text-green-400";
  if (count < bad[0] || count > bad[1]) return "text-red-400";
  return "text-amber-400";
}

function CheckItem({ pass, label }: { pass: boolean; label: string }) {
  return (
    <div className="flex items-start gap-2 py-1.5">
      <span className={pass ? "text-[#FFE028]" : "text-white/30"}>
        {pass ? "✓" : "✗"}
      </span>
      <span className="text-sm text-white/70">{label}</span>
    </div>
  );
}

export default function SEOSection({ seo, title, description }: SEOSectionProps) {
  const imagesWithAlt = seo.total_images - seo.images_missing_alt;
  const altPercent = seo.total_images > 0 ? (imagesWithAlt / seo.total_images) * 100 : 0;

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">SEO Overview</h2>

      <div className="space-y-5">
        {/* Title tag */}
        <div>
          <p className="text-sm text-white/50 mb-1.5">Title Tag</p>
          <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 font-mono text-sm text-white break-all">
            {title || "—"}
          </div>
          <p className={`text-xs mt-1 ${charCountColor(title.length, [50, 60], [30, 70])}`}>
            {title.length} characters
          </p>
        </div>

        {/* Meta description */}
        <div>
          <p className="text-sm text-white/50 mb-1.5">Meta Description</p>
          <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 font-mono text-sm text-white break-all">
            {description || "—"}
          </div>
          <p className={`text-xs mt-1 ${charCountColor(description.length, [150, 160], [70, 170])}`}>
            {description.length} characters
          </p>
        </div>

        {/* H1 */}
        <div className="flex items-start gap-2">
          <span className={seo.h1_count === 1 ? "text-[#FFE028]" : "text-amber-400"}>
            {seo.h1_count === 1 ? "✓" : "⚠"}
          </span>
          <div className="text-sm">
            <span className="text-white/70">
              H1 Tag — {seo.h1_count === 1 ? "1 found" : seo.h1_count === 0 ? "missing" : `${seo.h1_count} found (should be 1)`}
            </span>
            {seo.h1_texts.length > 0 && (
              <p className="text-white/50 text-xs mt-0.5 font-mono">{seo.h1_texts.join(", ")}</p>
            )}
          </div>
        </div>

        {/* Open Graph */}
        <div>
          <p className="text-sm text-white/50 mb-2">Open Graph</p>
          <CheckItem pass={!!seo.og_title} label={seo.og_title ? `og:title — ${seo.og_title}` : "og:title — missing"} />
          <CheckItem pass={!!seo.og_image} label={seo.og_image ? "og:image — present" : "og:image — missing"} />
        </div>

        {/* Image alt text */}
        <div>
          <p className="text-sm text-white/70 mb-1.5">
            {imagesWithAlt}/{seo.total_images} images have alt text
          </p>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FFE028] transition-all"
              style={{ width: `${altPercent}%` }}
            />
          </div>
        </div>

        {/* Structured data */}
        <CheckItem
          pass={seo.has_structured_data}
          label={
            seo.has_structured_data
              ? `Structured data — ${seo.schema_types.join(", ")}`
              : "Structured data — none found"
          }
        />

        {/* Canonical */}
        <CheckItem
          pass={!!seo.canonical}
          label={seo.canonical ? `Canonical URL — ${seo.canonical}` : "Canonical URL — missing"}
        />

        {/* Language */}
        <div className="flex items-start gap-2 py-1.5">
          <span className={seo.language ? "text-[#FFE028]" : "text-white/30"}>
            {seo.language ? "✓" : "✗"}
          </span>
          <span className="text-sm text-white/70">
            Language — {seo.language || "not set"}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-start gap-2 py-1.5">
          <span className="text-[#FFE028]">✓</span>
          <span className="text-sm text-white/70">
            {seo.internal_links} internal, {seo.external_links} external links
          </span>
        </div>
      </div>
    </div>
  );
}
