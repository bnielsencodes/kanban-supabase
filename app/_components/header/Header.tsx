import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import EditDeleteBoardModal from "./EditDeleteBoardModal";
import EditBoardModal from "../modals/edit-board/EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";

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
      className={`relative flex h-16 items-center justify-between px-4 ${
        darkMode ? "bg-neutral-300" : "bg-neutral-800"
      }`}
    >
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
