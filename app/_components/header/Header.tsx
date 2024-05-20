import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import EditDeleteBoardModal from "./EditDeleteBoardModal";
import EditBoardModal from "../modals/edit-board/EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";
import Image from "next/image";
import logoDark from "/public/assets/logo-dark.svg";
import logoLight from "/public/assets/logo-light.svg";
import clsx from "clsx";

export default function Header({
  session,
  darkMode,
  handleToggleTheme,
  placeholderData,
  setPlaceholderData,
  boardCount,
  setBoardCount,
  currentBoard,
  setCurrentBoard,
  setShowAddBoardModal,
  showEditBoardModal,
  setShowEditBoardModal,
  showDeleteBoardModal,
  setShowDeleteBoardModal,
  setShowAccountModal,
  handleSaveBoard,
  handleRemoveBoard,
}: {
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
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
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
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBoardModal: boolean;
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteBoardModal: boolean;
  setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveBoard: (id: number) => void;
  handleRemoveBoard: (id: number) => void;
}) {
  const [showEditDeleteBoardModal, setShowEditDeleteBoardModal] =
    useState(false);

  return (
    <div
      className={clsx(
        "relative flex h-16 items-center justify-between pl-4 md:h-[81px] md:border-b-[1px] md:pl-6 md:pr-1 lg:h-[96px] lg:pr-3",
        darkMode
          ? "md:border-lines-dark bg-grey-dark"
          : "md:border-lines-light bg-white",
      )}
    >
      {/* tablet/desktop logo */}
      <div
        className={clsx(
          "hidden h-full items-center border-r-[1px] md:flex md:pr-6 lg:pr-8",
          darkMode ? "border-lines-dark" : "border-lines-light",
        )}
      >
        <Image
          className={clsx(darkMode ? "hidden" : "")}
          src={logoDark}
          alt="Kanban site logo"
          width="153"
          height="26"
          sizes="100vw"
        />
        <Image
          className={clsx(darkMode ? "" : "hidden")}
          src={logoLight}
          alt="Kanban site logo"
          width="153"
          height="26"
          sizes="100vw"
        />
      </div>

      <div className="flex w-full items-center justify-between md:pl-6 lg:pb-2">
        <HeaderLeft
          {...{
            session,
            darkMode,
            handleToggleTheme,
            placeholderData,
            setPlaceholderData,
            setShowAddBoardModal,
            setShowAccountModal,
            currentBoard,
            setCurrentBoard,
          }}
        />

        <HeaderRight {...{ setShowEditDeleteBoardModal }} />
      </div>

      {showEditDeleteBoardModal && (
        <EditDeleteBoardModal
          {...{
            darkMode,
            showEditDeleteBoardModal,
            setShowEditDeleteBoardModal,
            setShowEditBoardModal,
            setShowDeleteBoardModal,
          }}
        />
      )}

      {showEditBoardModal && (
        <EditBoardModal
          {...{
            darkMode,
            boardCount,
            setBoardCount,
            currentBoard,
            setShowEditBoardModal,
            handleSaveBoard,
          }}
        />
      )}

      {showDeleteBoardModal && (
        <DeleteBoardModal
          {...{
            darkMode,
            currentBoard,
            setShowDeleteBoardModal,
            handleRemoveBoard,
          }}
        />
      )}
    </div>
  );
}
