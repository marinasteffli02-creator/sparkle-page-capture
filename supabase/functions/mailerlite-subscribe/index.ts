import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MAILERLITE_API_KEY = Deno.env.get("MAILERLITE_API_KEY");
    if (!MAILERLITE_API_KEY) {
      throw new Error("MAILERLITE_API_KEY is not configured");
    }

    const MAILERLITE_GROUP_ID = Deno.env.get("MAILERLITE_GROUP_ID");
    if (!MAILERLITE_GROUP_ID) {
      throw new Error("MAILERLITE_GROUP_ID is not configured");
    }

    const { email, name } = await req.json();

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "E-mail é obrigatório" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create/upsert subscriber and assign to group
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        fields: {
          name: name?.trim() || "",
        },
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MailerLite API error:", JSON.stringify(data));
      throw new Error(`MailerLite API call failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in mailerlite-subscribe:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
