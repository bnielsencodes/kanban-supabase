import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Avatar from "./Avatar";
import clsx from "clsx";

interface AccountProps {
  session: any;
  darkMode: boolean;
}

const Account: FC<AccountProps> = ({ session, darkMode }) => {
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [full_name, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`full_name, username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setFullname(data.full_name);
          setUsername(data.username);
          setAvatarUrl(data.avatar_url);
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>,
    avatarUrl: string,
  ) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      full_name,
      username,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }

  return (
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 mx-auto w-[calc(100%-32px)] max-w-[352px] -translate-x-1/2 -translate-y-1/2 lg:max-w-[416px]",
        darkMode ? "text-neutral-800" : "text-neutral-300",
      )}
    >
      <form
        onSubmit={(e) => updateProfile(e, avatar_url || "")}
        className="flex flex-col"
      >
        <Avatar
          url={avatar_url || ""}
          size={150}
          onUpload={(event, url) => {
            updateProfile(event, url);
          }}
        />
        <div className="mt-5 flex flex-col gap-2">
          <label
            className={clsx(
              "text-[12px]",
              darkMode ? "text-neutral-800" : "text-neutral-500",
            )}
            htmlFor="email"
          >
            Email<span className="ml-[2px]">&#42;</span>
          </label>
          <input
            className={clsx(
              "h-10 w-full cursor-pointer rounded border-[1px] border-input pl-4 text-[13px] duration-300 lg:hover:border-primary",
              darkMode
                ? "bg-neutral-300 placeholder-light"
                : "bg-neutral-800 placeholder-dark",
            )}
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <label
            className={clsx(
              "text-[12px]",
              darkMode ? "text-neutral-800" : "text-neutral-500",
            )}
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className={clsx(
              "h-10 w-full cursor-pointer rounded border-[1px] border-input pl-4 text-[13px] duration-300 lg:hover:border-primary",
              darkMode
                ? "bg-neutral-300 placeholder-light"
                : "bg-neutral-800 placeholder-dark",
            )}
            id="fullname"
            type="text"
            value={full_name || ""}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <label
            className={clsx(
              "text-[12px]",
              darkMode ? "text-neutral-800" : "text-neutral-500",
            )}
            htmlFor="username"
          >
            Username<span className="ml-[2px]">&#42;</span>
          </label>
          <input
            className={clsx(
              "h-10 w-full cursor-pointer rounded border-[1px] border-input pl-4 text-[13px] duration-300 lg:hover:border-primary",
              darkMode
                ? "bg-neutral-300 placeholder-light"
                : "bg-neutral-800 placeholder-dark",
            )}
            id="username"
            type="text"
            required
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button
          className="mt-6 block h-12 w-full rounded-3xl border-0 bg-primary duration-300 lg:hover:bg-primary-hover"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>

        <button
          className="mt-6 block h-12 w-full rounded-3xl border-0 bg-primary duration-300 lg:hover:bg-primary-hover"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Account;
