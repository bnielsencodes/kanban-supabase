// "use client";

import { login } from "./actions";

// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import {
//   // Import predefined theme
//   ThemeSupa,
// } from "@supabase/auth-ui-shared";

// const supabase = createClient(
//   "https://pzhwgamtivczmertcbcj.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6aHdnYW10aXZjem1lcnRjYmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTQ2OTksImV4cCI6MjAyOTQzMDY5OX0.s7oAQsDMvFv4tvCJt0aHpGnJYt8upTi2YEqNrS6ijA8"
// );

export default function LoginPage() {
  return (
    // <>
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      {/* <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required /> */}
      <button formAction={login}>Log in</button>
      {/* <button formAction={signup}>Sign up</button> */}
    </form>
    // <br />
    // <br />
    // <br />
    // <br />
    //   <Auth
    //     supabaseClient={supabase}
    //     // show magic link sign-in option
    //     view="magic_link"
    //     appearance={{
    //       theme: ThemeSupa,
    //       style: {
    //         divider: {
    //           background: "#d9d9d9",
    //         },
    //       },
    //     }}
    //     providers={
    //       [
    //         // "google", "facebook", "twitter"
    //       ]
    //     }
    //     // redirect link for production
    //     redirectTo="https://kanban-murex-eta.vercel.app/auth/callback"
    //     // redirect link for development
    //     // redirectTo="http://localhost:3000/auth/callback"
    //     // // hide anchor links
    //     // showLinks={false}
    //     // // custom labels
    //     // localization={{
    //     //   variables: {
    //     //     magic_link: {
    //     //       email_input_placeholder: "e.g. alex@mail.com",
    //     //     },
    //     //     // sign_in: {
    //     //     //   social_provider_text: "Log in with {{provider}}",
    //     //     // },
    //     //   },
    //     // }}
    //   />
    // </>
  );
}
