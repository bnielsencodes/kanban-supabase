export default function Header({
  session,
  darkMode,
  toggleTheme,
  placeholderData,
  setPlaceholderData,
  boardCount,
  setBoardCount,
  currentBoard,
  setCurrentBoard,
  setShowAddBoardModal,
  handleSaveBoard,
  handleRemoveBoard,
}: {
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
  handleSaveBoard: (id: number) => void;
  handleRemoveBoard: (id: number) => void;
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 ${
        darkMode ? "bg-neutral-300" : "bg-neutral-800"
      }`}
    >
    </div>
  );
}