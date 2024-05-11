export default function AddBoardModal({
  darkMode,
  placeholderData,
  setPlaceholderData,
  boardCount,
  setBoardCount,
  setShowAddBoardModal,
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
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-screen select-none">
      <div
        className="bg-black/40 absolute left-0 top-0 h-full w-full"
        onClick={() => setShowAddBoardModal(false)}
      ></div>

      <div
        className={`absolute left-1/2 top-[calc(50%+64px)] z-20 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 ${
          darkMode ? "bg-neutral-300" : "bg-neutral-800"
        } select-none`}
      >
      </div>
    </div>
  );
}
