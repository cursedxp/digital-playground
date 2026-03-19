interface OGPreviewProps {
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  url: string;
}

export default function OGPreview({ ogTitle, ogDescription, ogImage, url }: OGPreviewProps) {
  const domain = (() => {
    try {
      return new URL(url.startsWith("http") ? url : `https://${url}`).hostname;
    } catch {
      return url;
    }
  })();

  return (
    <div>
      <p className="text-sm text-white mb-3">Social Share Preview</p>
      <div className="rounded-lg border border-white/10 overflow-hidden max-w-xs">
        {/* Image area */}
        <div className="aspect-[1.91/1] bg-white/5 flex items-center justify-center overflow-hidden">
          {ogImage ? (
            <img src={ogImage} alt="Open Graph preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-white/20 text-xs">No og:image set</div>
          )}
        </div>
        {/* Card body */}
        <div className="px-3 py-2 bg-white/[0.03]">
          <p className="text-xs text-white uppercase tracking-wide mb-0.5">{domain}</p>
          <p className="text-xs font-semibold text-white truncate">
            {ogTitle || "No og:title set"}
          </p>
          {ogDescription && (
            <p className="text-xs text-white mt-0.5 line-clamp-2">{ogDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
}
