interface ScreenshotPreviewProps {
  screenshot: string;
}

export default function ScreenshotPreview({ screenshot }: ScreenshotPreviewProps) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-4">
          <div className="h-5 rounded-md bg-white/10 max-w-xs mx-auto" />
        </div>
      </div>
      {/* Screenshot */}
      <img
        src={screenshot}
        alt="Website screenshot"
        className="w-full block"
      />
    </div>
  );
}
