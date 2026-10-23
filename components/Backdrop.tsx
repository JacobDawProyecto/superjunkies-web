const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")";

export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#dff79a] opacity-70 blur-[130px] animate-drift-1" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[#ffd3f1] opacity-60 blur-[140px] animate-drift-2" />
      <div className="absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-[#cde9ff] opacity-60 blur-[140px] animate-drift-3" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  );
}
