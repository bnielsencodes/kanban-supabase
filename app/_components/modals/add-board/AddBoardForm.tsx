import { useEffect, useState } from "react";
export default function AddBoardForm({
  darkMode,
  placeholderData,
  setPlaceholderData,
  setShowAddBoardModal,
  boardCount,
  setBoardCount,
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
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [boardTitle, setBoardTitle] = useState("");

  // Set NAME property of newBoard state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    console.log(value);
    setBoardTitle(value);
  };

  const handleSubmit = () => {
    let data = placeholderData;
    data.push({ id: boardCount + 1, name: boardTitle, columns: [] });
    localStorage.setItem("data", JSON.stringify(data));
    setBoardCount((prevState) => prevState + 1);
    setShowAddBoardModal(false);
  };

  return (
    <form id="form" className="flex flex-col">
      {/* modal title */}
      <p
        className={`mb-[18px] ${
          darkMode ? "text-neutral-800" : "text-neutral-100"
        } text-lg font-bold leading-[23px]`}
      >
        Add New Board
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
        {/* board name input */}
        <input
          id="board-name"
          className={`border-inputBorder bg-transparent mb-[2px] mt-[3.5px] h-[40px] w-full rounded border pl-[16px] ${
            darkMode ? "text-neutral-800" : "text-neutral-100"
          } ${
            darkMode
              ? "placeholder-placeholderDark"
              : "placeholder-placeholderLight"
          }`}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="e.g. Web Design"
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

      {/* add column button */}
      {placeholderData.length < 5 && (
        <button
          className={`mb-6 h-[40px] rounded-[20px] ${
            darkMode ? "bg-neutral-800" : "bg-palePurpleBtn"
          } cursor-pointer text-[13px] font-semibold leading-[13px] text-primary`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          + Add New Column
        </button>
      )}

      {/* create new board button */}
      <button
        className="h-[40px] cursor-pointer rounded-[20px] bg-primary text-[13px] font-semibold leading-[13px] text-neutral-800"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        type="submit"
      >
        Create New Board
      </button>
    </form>
  );
}
