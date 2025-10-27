interface TransitionCompProps {
  className?: string;
}

export default function TransitionComp({ className }: TransitionCompProps) {
  return (
    <div
      className={`absolute ${className} bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-10`}
    />
  );
}
