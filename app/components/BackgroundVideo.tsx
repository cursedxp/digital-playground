'use client';

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
      onTimeUpdate={(e) => {
        const video = e.currentTarget;
        if (video.currentTime >= 8) {
          video.currentTime = 0;
        }
      }}
    >
      <source src="/bg-video.mp4" type="video/mp4" />
    </video>
  );
}
