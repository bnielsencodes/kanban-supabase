import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import logoLight from "../../../public/assets/logo-light.svg";
import logoDark from "../../../public/assets/logo-dark.svg";
import clsx from "clsx";

export default function Auth({ darkMode }: { darkMode: boolean }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 mx-auto w-[calc(100%-32px)] max-w-[352px] -translate-x-1/2 -translate-y-1/2 lg:max-w-[416px]",
        darkMode ? "text-neutral-800" : "text-neutral-300",
      )}
    >
      <Image
        src={darkMode ? logoLight : logoDark}
        alt="Kanban site logo"
        width={153}
        height={26}
      />
      <form className="mt-5 flex flex-col gap-2" onSubmit={handleLogin}>
        <label
          className={clsx(
            "",
            darkMode ? "text-neutral-800" : "text-neutral-500",
          )}
          htmlFor="email"
        >
          Sign in via magic link with your email below
        </label>
        <input
          className={clsx(
            "mb-5 h-10 w-full cursor-pointer rounded border-[1px] border-input pl-4 text-[13px] duration-300 lg:hover:border-primary",
            darkMode
              ? "bg-neutral-300 placeholder-light"
              : "bg-neutral-800 placeholder-dark",
          )}
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={
            "block h-12 w-full rounded-3xl border-0 bg-primary duration-300 lg:hover:bg-primary-hover"
          }
          disabled={loading}
        >
          {loading ? <span>Loading</span> : <span>Send magic link</span>}
        </button>
      </form>
    </div>
  );
}
