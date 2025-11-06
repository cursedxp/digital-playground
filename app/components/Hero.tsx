import MoleculeBackground from "@/app/components/MoleculeBackground";
import SoundWave from "@/app/components/SoundWave";
import BookCallButton from "@/app/components/BookCallButton";
import TransitionComp from "@/app/components/TransitionComp";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden  my-20 sm:mb-30 sm:mt-0">
      {/* <BackgroundVideo /> */}
      {/* <Overlay /> */}
      <TransitionComp className="bottom-0 left-0 w-full h-48" />
      {/* Content */}
      <div className="relative z-10 max-w-4xl m-auto flex flex-col items-center px-6 text-center">
        <div className="rounded-full flex items-center justify-center radial-gradient p-10">
          <div className="w-[300px] h-[300px] mx-auto rounded-full">
            <MoleculeBackground className="w-full h-full" />
          </div>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
          Smart Solutions{" "}
          <span className="font-serif text-7xl sm:text-8xl ">Growing </span>
          <span className="relative inline-block font-serif text-7xl sm:text-8xl font-extralight tracking-tight">
            <span className="relative z-10">Businesses</span>
            <span
              className="absolute inset-0 -inset-x-2"
              style={{
                backgroundImage: "url(/marker-highlight.svg)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.6,
              }}
            />
          </span>
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl text-gray-300 mb-10">
          Monthly development subscription for growing businesses. Custom web
          applications, seamless integrations, and intelligent
          workflows—delivered continuously. Cancel anytime, no long-term
          contracts.
        </p>
        <div className="flex items-center justify-center gap-4">
          <SoundWave />
          <BookCallButton />
        </div>
      </div>
    </div>
  );
}
