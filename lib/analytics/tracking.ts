import { getSupabaseBrowserClient } from "@/lib/supabase";

export async function trackEvent(event: string, payload: Record<string, unknown>) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return;
  }

  await supabase.from("events").insert({
    event,
    payload,
    created_at: new Date().toISOString(),
  });
}
