import MoleculeBackground from "./components/MoleculeBackground";
import BackgroundVideo from "./components/BackgroundVideo";
import SoundWave from "./components/SoundWave";
import BookCallButton from "./components/BookCallButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        {/* Background Video */}
        <BackgroundVideo />

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />

        {/* Gradient Transition to Footer */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl m-auto flex flex-col items-center px-6 text-center">
          <div className="rounded-full flex items-center justify-center radial-gradient p-10">
            <div className="w-[300px] h-[300px] mx-auto rounded-full">
              <MoleculeBackground className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Smart Solutions for Growing Businesses
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-10">
            Custom web applications, seamless integrations, and intelligent
            workflows designed to transform your business operations. Full-stack
            developer + UX designer helping SMBs scale efficiently without the
            overhead of traditional enterprise solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <SoundWave />
            <BookCallButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
