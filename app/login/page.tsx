"use client";

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://pzhwgamtivczmertcbcj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6aHdnYW10aXZjem1lcnRjYmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTQ2OTksImV4cCI6MjAyOTQzMDY5OX0.s7oAQsDMvFv4tvCJt0aHpGnJYt8upTi2YEqNrS6ijA8"
);

export default function LoginPage() {
  return (
      <Auth
        supabaseClient={supabase}
        // show magic link sign-in option
        view="magic_link"
        appearance={{
          theme: ThemeSupa,
          style: {
            divider: {
              background: "#d9d9d9",
            },
          },
        }}
        providers={
          [
          ]
        }
        redirectTo="http://localhost:3000/auth/callback"
      />
    </>
  );
}
