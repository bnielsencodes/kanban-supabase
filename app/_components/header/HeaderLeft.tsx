import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";

export default function HeaderLeft({
  session,
  darkMode,
  toggleTheme,
  placeholderData,
  setPlaceholderData,
  setShowAddBoardModal,
  currentBoard,
  setCurrentBoard,
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
  return (
    <div className="flex items-center">
      <Image
        className="mr-4 h-[25px] w-6 "
        src={logoMobile}
        alt="Kanban site logo"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}
