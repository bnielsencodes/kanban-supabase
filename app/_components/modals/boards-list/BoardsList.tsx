import data from "../../../data";
import clsx from "clsx";

export default function BoardsList({
  darkMode,
  placeholderData,
  setPlaceholderData,
  setShowBoardsModal,
  setShowAddBoardModal,
  currentBoard,
  setCurrentBoard,
}: {
  darkMode: boolean;
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
}) {
  const boardsListItems = placeholderData.map((board) => {
    // change current board on click
    function handleClick() {
      setCurrentBoard(data[board.id - 1]);
      // setShowBoardsModal(false);
    }

    return (
      <li
        className={clsx(
          "group/item flex h-12 w-60 items-center rounded-r-[100px] pl-6 transition-colors lg:cursor-pointer",
          currentBoard.name !== board.name && darkMode
            ? "hover:bg-neutral-800"
            : currentBoard.name !== board.name
              ? "hover:bg-primary-pale"
              : "bg-primary",
        )}
        key={board.id}
        onClick={handleClick}
      >
        <svg
          className="mr-3"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={clsx(
              "transition-colors",
              currentBoard.name !== board.name
                ? "fill-neutral-500 lg:group-hover/item:fill-primary"
                : "fill-neutral-800",
            )}
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          />
        </svg>
        <p
          className={clsx(
            "font-semibold leading-[15.5px] transition-colors",
            currentBoard.name === board.name
              ? "text-neutral-800"
              : "text-neutral-500 lg:group-hover/item:text-primary",
          )}
        >
          {board.name}
        </p>
      </li>
    );
  });

  return (
    <div>
      <p className="pl-6 text-xs font-semibold uppercase leading-[15px] tracking-[2.4px] text-neutral-500">
        All Boards ({placeholderData.length})
      </p>
      <ul className="mt-[18px]">{boardsListItems}</ul>

      <div className="mb-[34px] flex h-12 w-60 items-center pl-6">
        <svg
          className="mr-3"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-primary transition-colors"
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          />
        </svg>
        <button
          className="font-semibold leading-[15.5px] text-primary transition-colors lg:hover:text-primary-hover"
          onClick={(e) => {
            e.preventDefault();
            setShowBoardsModal(false);
            setShowAddBoardModal(true);
          }}
        >
          + Create New Board
        </button>
      </div>
    </div>
  );
}
