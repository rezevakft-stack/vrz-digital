export default function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-9 w-9 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
        }}
      />
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">VRZ</div>
        <div className="text-xs text-white/60 -mt-0.5">DIGITAL</div>
      </div>
    </div>
  );
}
