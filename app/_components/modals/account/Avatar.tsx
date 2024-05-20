import React, { FC, useEffect, useState, ChangeEvent } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  darkMode: boolean;
  url: string;
  size: number;
  onUpload: (event: ChangeEvent<HTMLInputElement>, filePath: string) => void;
}

const Avatar: FC<AvatarProps> = ({ darkMode, url, size, onUpload }) => {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image");
    }
  }

  async function uploadAvatar(event: ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(event, filePath);
    } catch (error) {
      let errorMessage = "Failed to upload image";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex items-center gap-4">
      {avatarUrl ? (
        <Image
          className="rounded-full"
          src={avatarUrl}
          alt="Avatar"
          width={150}
          height={150}
        />
      ) : (
        <div className="h-[150px] w-[285px] animate-pulse rounded-full bg-neutral-600" />
      )}

      <div className="relative w-full">
        <label
          className={clsx(
            "flex h-12 w-full cursor-pointer items-center justify-center rounded-3xl text-primary duration-300",
            darkMode
              ? "bg-neutral-800 lg:hover:bg-opacity-80"
              : "bg-primary-pale lg:hover:bg-primary lg:hover:bg-opacity-25",
          )}
          htmlFor="single"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          className="absolute right-0 top-1/2 h-12 w-full -translate-y-1/2 cursor-pointer rounded-3xl duration-300 lg:hover:border-primary"
          style={{
            visibility: "hidden",
          }}
          id="single"
          type="file"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default Avatar;
