import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Avatar from "./Avatar";
import clsx from "clsx";

interface AccountModalProps {
  session: any;
  darkMode: boolean;
  showAccountModal: boolean;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountModal: FC<AccountModalProps> = ({
  session,
  darkMode,
  showAccountModal,
  setShowAccountModal,
}) => {
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
        "absolute left-0 top-16 h-screen w-screen cursor-default select-none",
        showAccountModal ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div
        className="bg-modal absolute -top-[83px] bottom-0 left-0 right-0"
        onClick={() => setShowAccountModal(false)}
      ></div>

      <div
        className={clsx(
          "absolute left-1/2 top-1/2 mx-auto w-[calc(100%-32px)] max-w-[352px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 md:p-8 lg:max-w-[416px]",
          darkMode
            ? "bg-neutral-300 text-neutral-800"
            : "bg-neutral-800 text-neutral-300",
        )}
      >
        <form
          className="flex flex-col"
          onSubmit={(e) => updateProfile(e, avatar_url || "")}
          noValidate
        >
          <Avatar
            {...{ darkMode }}
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
                "h-10 w-full rounded border-[1px] border-input pl-4 text-[13px] leading-[23px] duration-300",
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
                "h-10 w-full cursor-pointer rounded border-[1px] border-input pl-4 text-[13px] leading-[23px] duration-300 lg:hover:border-primary",
                darkMode
                  ? "bg-neutral-300 placeholder-light"
                  : "bg-neutral-800 text-neutral-100 placeholder-dark",
              )}
              id="fullname"
              onChange={(e) => setFullname(e.target.value)}
              value={full_name || ""}
              type="text"
            />
          </div>
          <div className="relative mt-5 flex flex-col gap-2">
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
                "peer h-10 w-full cursor-pointer appearance-none rounded border-[1px] border-input pl-4 text-[13px] leading-[23px] duration-300 lg:hover:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-warning",
                darkMode
                  ? "bg-neutral-300 placeholder-light"
                  : "bg-neutral-800 text-neutral-100 placeholder-dark",
              )}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
              type="text"
              required
            />
            <span className="absolute bottom-[10px] right-4 hidden text-sm text-warning peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Can&apos;t be empty
            </span>
          </div>

          <button
            className="mt-6 block h-12 w-full rounded-3xl border-0 bg-primary duration-300 lg:hover:bg-primary-hover"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>

          <button
            className={clsx(
              "mt-6 block h-12 w-full rounded-3xl border-0 text-primary duration-300",
              darkMode
                ? "bg-neutral-800 lg:hover:bg-opacity-80"
                : "bg-primary-pale lg:hover:bg-primary lg:hover:bg-opacity-25",
            )}
            type="button"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountModal;
