import { useState } from "react";
import Image from "next/image";
import iconChevronUp from "/public/assets/icon-chevron-up.svg";
import iconChevronDown from "/public/assets/icon-chevron-down.svg";
import BoardsModal from "../modals/boards-list/BoardsModal";
import clsx from "clsx";

export default function BoardSelect({
  session,
  darkMode,
  handleToggleTheme,
  placeholderData,
  setPlaceholderData,
  setShowAddBoardModal,
  setShowAccountModal,
}: // currentBoard,
// setCurrentBoard,
{
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
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showBoardsModal, setShowBoardsModal] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(placeholderData[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setShowBoardsModal(true);
    } else {
      setShowBoardsModal(false);
    }
  };

  return (
    <div className="group relative flex cursor-pointer items-center md:hidden">
      <input
        className="hidden appearance-none focus-visible:outline-none"
        id="board-select-btn"
        onChange={handleChange}
        type="checkbox"
        name="board-select"
      />
      <label
        className={clsx(
          "flex select-none items-center gap-4 pr-[19px] text-[18px] font-medium leading-[23px] group-hover:cursor-pointer",
          darkMode ? "text-white" : "text-black",
        )}
        htmlFor="board-select-btn"
      >
        {currentBoard.name}
      </label>

      {!showBoardsModal ? (
        <Image
          className="pointer-events-none absolute right-0 top-[7px]"
          src={iconChevronDown}
          alt="chevron down icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      ) : (
        <Image
          className="pointer-events-none absolute right-0 top-[7px]"
          src={iconChevronUp}
          alt="chevron up icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      )}

      <BoardsModal
        {...{
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
        }}
      />
    </div>
  );
}
