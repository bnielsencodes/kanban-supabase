import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import iconLight from "/public/assets/icon-light-theme.svg";
import iconDark from "/public/assets/icon-dark-theme.svg";
import BoardsList from "./BoardsList";
import ThemeToggle from "./ThemeToggle";
import AvatarButton from "./AvatarButton";
import clsx from "clsx";

interface AccountProps {
  session: any;
  darkMode: boolean;
  handleToggleTheme: () => void;
  placeholderData: {
    id: number;
    name: string;
    columns: {
      id: number;
      name: string;
      tasks: {
        id: number;
        title: string;
        description: string;
        status: string;
        subtasks: {
          id: number;
          title: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  }[];
  setPlaceholderData: React.Dispatch<React.SetStateAction<any>>;
  showBoardsModal: boolean;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentBoard: {
    id: number;
    name: string;
    columns: {
      id: number;
      name: string;
      tasks: {
        id: number;
        title: string;
        description: string;
        status: string;
        subtasks: {
          id: number;
          title: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  };
  setCurrentBoard: React.Dispatch<React.SetStateAction<any>>;
}

const BoardsModal: FC<AccountProps> = ({
  session,
  darkMode,
  handleToggleTheme,
  placeholderData,
  setPlaceholderData,
  showBoardsModal,
  setShowBoardsModal,
  setShowAddBoardModal,
  setShowAccountModal,
  currentBoard,
  setCurrentBoard,
}) => {
  return (
    <div
      className={clsx(
        "absolute left-[-56px] top-16 h-screen w-screen cursor-default select-none",
        showBoardsModal ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div
        className="bg-modal absolute -top-[83px] bottom-0 left-0 right-0"
        onClick={() => setShowBoardsModal(false)}
      ></div>

      <div
        className={clsx(
          "boards-modal shadow-boardsModal relative mx-auto flex w-[264px] select-none flex-col rounded-lg py-4 pt-[17px]",
          darkMode ? "bg-neutral-300" : "bg-neutral-800",
          showBoardsModal
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2/4 opacity-0",
        )}
      >
        <BoardsList
          {...{
            darkMode,
            placeholderData,
            setPlaceholderData,
            setShowBoardsModal,
            setShowAddBoardModal,
            currentBoard,
            setCurrentBoard,
          }}
        />

        <div
          className={clsx(
            "mx-auto mt-auto flex h-12 w-[235px] items-center justify-center rounded-md",
            darkMode ? "bg-neutral-200" : "bg-neutral-700",
          )}
        >
          <div
            className={clsx(
              "flex h-full w-[calc(100%-50px)] items-center justify-center border-r-2",
              darkMode ? "border-neutral-300" : "border-neutral-800",
            )}
          >
            <Image
              src={iconLight}
              alt="sun icon"
              width="19"
              height="19"
              sizes="100vw"
            />
            <ThemeToggle
              {...{
                darkMode,
                handleToggleTheme,
              }}
            />
            <Image
              src={iconDark}
              alt="moon and star icon"
              width="15"
              height="15"
              sizes="100vw"
            />
          </div>
          <AvatarButton
            {...{ session, setShowBoardsModal, setShowAccountModal }}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardsModal;
