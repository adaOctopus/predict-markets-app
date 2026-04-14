type AdSlotProps = {
  slotName: string;
};

export function AdSlot({ slotName }: AdSlotProps) {
  return (
    <div className="rounded-xl border border-dashed border-cyan-400/40 bg-cyan-500/5 p-4 text-xs text-cyan-200">
      AdSense Placeholder: {slotName} ({process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "configure NEXT_PUBLIC_ADSENSE_CLIENT_ID"})
    </div>
  );
}
