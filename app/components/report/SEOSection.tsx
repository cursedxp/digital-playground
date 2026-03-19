import { SEOData } from "@/app/types/report";

interface SEOSectionProps {
  seo: SEOData;
  title: string;
  description: string;
}


function CheckItem({ pass, label }: { pass: boolean; label: string }) {
  return (
    <div className="flex items-start gap-2 py-2 border-b border-white/10 last:border-0">
      <span className={pass ? "text-[#FFE028] shrink-0" : "text-white/30 shrink-0"}>
        {pass ? "✓" : "✗"}
      </span>
      <span className="text-sm text-white leading-snug">{label}</span>
    </div>
  );
}

export default function SEOSection({ seo, title, description }: SEOSectionProps) {
  const imagesWithAlt = seo.total_images - seo.images_missing_alt;
  const altPercent = seo.total_images > 0 ? (imagesWithAlt / seo.total_images) * 100 : 0;

  return (
    <div className="space-y-10">

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <span className="text-sm text-white">H1 Tags</span>
          <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>{seo.h1_count}</p>
          <span className="text-xs text-white">{seo.h1_count === 1 ? "ideal" : seo.h1_count === 0 ? "missing" : "should be 1"}</span>
          <p className="text-xs text-white leading-relaxed mt-1">The main heading Google reads to understand what your page is about. There should be exactly one.</p>
        </div>
        <div>
          <span className="text-sm text-white">Language</span>
          <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>{seo.language || "—"}</p>
          <span className="text-xs text-white">{seo.language ? "set" : "not set"}</span>
          <p className="text-xs text-white leading-relaxed mt-1">Tells Google which language your page is in so it shows your site to the right audience.</p>
        </div>
        <div>
          <span className="text-sm text-white">Internal Links</span>
          <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>{seo.internal_links}</p>
          <span className="text-xs text-white">on this page</span>
          <p className="text-xs text-white leading-relaxed mt-1">Links to your own pages help Google discover your content and understand your site structure.</p>
        </div>
        <div>
          <span className="text-sm text-white">External Links</span>
          <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>{seo.external_links}</p>
          <span className="text-xs text-white">on this page</span>
          <p className="text-xs text-white leading-relaxed mt-1">Links to other sites. A few credible outbound links are fine — too many can dilute your page focus.</p>
        </div>
      </div>

      {/* Alt Text + Technical signals — side by side */}
      <div className="flex gap-8">
        {seo.total_images > 0 && (
          <>
            <div className="w-40 shrink-0">
              <p className="text-sm text-white mb-3 uppercase tracking-wide">Alt Text</p>
              <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>
                {imagesWithAlt}<span className="text-base font-normal text-white">/{seo.total_images}</span>
              </p>
              <div className="h-1 rounded-full overflow-hidden mt-2" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: `${altPercent}%`, background: "linear-gradient(90deg, #B8960A 0%, #FFE028 60%, #FFF176 100%)" }} />
              </div>
              <p className="text-xs text-white leading-relaxed mt-2">Images with descriptive alt text — helps Google and screen readers understand your visuals.</p>
            </div>

            <div className="w-px bg-white/10 shrink-0" />
          </>
        )}

        <div className="flex-1 min-w-0">
          <p className="text-sm text-white mb-3 uppercase tracking-wide">Technical signals</p>
          <p className="text-white text-sm leading-relaxed mb-4">Technical tags search engines and social platforms use when indexing your page. Missing ones leave ranking potential on the table.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            <div>
              <CheckItem
                pass={seo.h1_count === 1}
                label={seo.h1_texts.length > 0 ? `H1: "${seo.h1_texts[0]}"` : `H1 — ${seo.h1_count === 0 ? "missing" : `${seo.h1_count} found`}`}
              />
              <CheckItem pass={!!seo.canonical} label={seo.canonical ? `Canonical — set` : "Canonical URL — missing"} />
              <CheckItem
                pass={seo.has_structured_data}
                label={seo.has_structured_data ? `Structured data — ${seo.schema_types.slice(0, 2).join(", ")}` : "Structured data — none"}
              />
            </div>
            <div>
              <CheckItem pass={!!seo.og_title} label={seo.og_title ? `og:title — set` : "og:title — missing"} />
              <CheckItem pass={!!seo.og_image} label={seo.og_image ? "og:image — present" : "og:image — missing"} />
              <CheckItem
                pass={!!seo.twitter_card}
                label={seo.twitter_card ? `Twitter card — ${seo.twitter_card}` : "Twitter card — missing"}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
