"use client";
import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

interface Session {
  user: {
    id: string;
  };
}

const App: FC = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event: any, session: Session | null) => {
      setSession(session);
    });
  }, []);

      </div>
  return (
    <div
      className={clsx("h-screen w-screen", {
        "bg-neutral-200": darkMode,
        "bg-neutral-700": !darkMode,
      })}
    >
      {!session ? (
        <Auth {...{ darkMode }} />
      ) : (
        <>
          <main
            className={`main h-screen ${
              darkMode ? "bg-neutral-200" : "bg-neutral-700"
            }`}
          >
          </main>
        </>
      )}
    </div>
  );
};

export default App;
