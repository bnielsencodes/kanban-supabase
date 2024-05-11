import React, { FC, useState, useEffect } from "react";
import clsx from "clsx";

interface AccountProps {
  session: any;
  darkMode: boolean;
  toggleTheme: () => void;
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
  toggleTheme,
  placeholderData,
  setPlaceholderData,
  showBoardsModal,
  setShowBoardsModal,
  setShowAddBoardModal,
  currentBoard,
  setCurrentBoard,
}) => {
  return (
    <div
      className={`absolute left-[-56px] top-[-19px] z-30 h-screen w-screen cursor-default select-none ${
        showBoardsModal ? "opacity-100" : "opacity-0"
      } ${showBoardsModal ? "visible" : "invisible"}`}
    >
      <div
        className="bg-black/40 absolute left-0 top-0 h-full w-full"
        onClick={() => setShowBoardsModal(false)}
      ></div>

      <div
        className={`boards-modal relative z-40 mx-auto mb-0 mt-[76px] flex w-[264px] flex-col rounded-lg py-4 pt-[17px] ${
          darkMode ? "bg-neutral-300" : "bg-neutral-800"
        } ${
          darkMode ? "shadow-boardsModalDark" : "shadow-boardsModalLight"
        } select-none ${
          showBoardsModal
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2/4 opacity-0"
        }`}
      >
        <div
          className={clsx(
            "mx-auto mt-auto flex h-12 w-[235px] items-center justify-center rounded-md",
            {
              "bg-neutral-200": darkMode,
              "bg-neutral-700": !darkMode,
            },
          )}
        >
        </div>
      </div>
    </div>
  );
};

export default BoardsModal;
