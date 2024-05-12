export default function EditBoardForm({
  darkMode,
  boardCount,
  setBoardCount,
  currentBoard,
  setShowEditBoardModal,
  handleSaveBoard,
}: {
  darkMode: boolean;
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
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveBoard: (id: number) => void;
}) {
  return (
    <form id="form" className="flex flex-col">
      <p
        className={`mb-[18px] ${
          darkMode ? "text-neutral-800" : "text-neutral-100"
        } text-lg font-bold leading-[23px]`}
      >
        Edit Board
      </p>

      <fieldset>
        <label
          className={`${
            darkMode ? "text-neutral-800" : "text-neutral-500"
          } text-xs font-bold leading-[15px]`}
          htmlFor="board-name"
        >
          Board Name
        </label>
        <input
          id="board-name"
          className={`border-inputBorder bg-transparent mb-[2px] mt-[3.5px] h-[40px] w-full rounded border pl-[16px] ${
            darkMode ? "text-neutral-800" : "text-neutral-100"
          } ${
            darkMode ? "placeholder-neutral-800" : "placeholder-neutral-100"
          }`}
          // onChange={handleChange}
          type="text"
          name="name"
          placeholder={currentBoard.name}
        />
      </fieldset>

      <fieldset>
        <p
          className={`mb-[7px] mt-[22px] ${
            darkMode ? "text-neutral-800" : "text-neutral-500"
          } text-xs font-bold leading-[15px]`}
        >
          Board Columns
        </p>
        <ul>
        </ul>
      </fieldset>
      <button
        className={`mb-6 h-[40px] rounded-[20px] ${
          darkMode ? "bg-neutral-800" : "bg-palePurpleBtn"
        } cursor-pointer text-[13px] font-semibold leading-[13px] text-primary`}
      >
        + Add New Column
      </button>
      <button
        className="h-[40px] cursor-pointer rounded-[20px] bg-primary text-[13px] font-semibold leading-[13px] text-neutral-800"
        type="submit"
      >
        Create New Board
      </button>
    </form>
  );
}
