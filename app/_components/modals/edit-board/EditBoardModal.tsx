import EditBoardForm from "./EditBoardForm";

export default function EditBoardModal({
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
    <div className="absolute left-0 top-0 z-10 h-screen w-screen select-none">
      <div
        className="bg-black/40 absolute left-0 top-0 h-full w-full"
        onClick={() => setShowEditBoardModal(false)}
      ></div>
      <div
        className={`absolute left-1/2 top-[calc(50%+64px)] z-20 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 ${
          darkMode ? "bg-grey-dark" : "bg-white"
        } select-none`}
      >
        <EditBoardForm
          {...{
            darkMode,
            boardCount,
            setBoardCount,
            currentBoard,
            setShowEditBoardModal,
            handleSaveBoard,
          }}
        />
      </div>
    </div>
  );
}
