import React, { FC, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

interface AccountPage {
  session: any;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarButton: FC<AccountPage> = ({
  session,
  setShowBoardsModal,
  setShowAccountModal,
}) => {
  const supabase = createClient();
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl2] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`avatar_url`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setAvatarUrl(data.avatar_url);
        }
      }
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  useEffect(() => {
    if (avatar_url) downloadImage(avatar_url);
  }, [avatar_url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl2(url);
    } catch (error) {
      console.log("Error downloading image");
    }
  }

  const handleClick = () => {
    setShowBoardsModal(false);
    setShowAccountModal(true);
  };

  return (
    <div
      className="group/button lg:hover:bg-primary-pale flex h-full w-[50px] items-center justify-center gap-6 rounded-r-md transition-colors hover:cursor-pointer"
      onClick={handleClick}
    >
      {avatarUrl ? (
        <Image
          className="rounded-full transition-opacity group-hover/button:opacity-80"
          src={avatarUrl}
          alt="Avatar"
          width="32"
          height="32"
        />
      ) : (
        <div className="avatar no-image h-[30px] w-[30px] rounded-full" />
      )}
    </div>
  );
};

export default AvatarButton;
