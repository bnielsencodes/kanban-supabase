export default function DeleteBoardModal({
  darkMode,
  currentBoard,
  setShowDeleteBoardModal,
  handleRemoveBoard,
}: {
  darkMode: boolean;
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
  setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleRemoveBoard: (id: number) => void;
}) {
  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-screen select-none">
      <div className="bg-overlay absolute left-0 top-0 h-full w-full"></div>

      <div
        className={`absolute left-1/2 top-[calc(50%+64px)] z-20 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 ${
          darkMode ? "bg-grey-dark" : "bg-white"
        } select-none`}
      >
        <p className="mb-[22px] text-lg font-bold leading-[23px] text-warning">
          Delete this board?
        </p>

        <p className="text-grey-medium mb-[22px] pr-1 text-[13px] leading-[23px]">
          Are you sure you want to delete the ‘{currentBoard.name}’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-4">
          <button
            className={`text-white h-[40px] cursor-pointer rounded-[20px] bg-warning text-[13px] font-semibold leading-[13px] lg:hover:bg-warning-hover`}
            onClick={() => handleRemoveBoard(currentBoard.id)}
          >
            Delete
          </button>

          <button
            className="bg-white h-[40px] cursor-pointer rounded-[20px] text-[13px] font-semibold leading-[13px] text-primary lg:hover:bg-opacity-80"
            onClick={(e) => {
              setShowDeleteBoardModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
