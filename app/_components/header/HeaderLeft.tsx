import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";
import BoardSelect from "./BoardSelect";
import clsx from "clsx";

export default function HeaderLeft({
  session,
  darkMode,
  handleToggleTheme,
  placeholderData,
  setPlaceholderData,
  setShowAddBoardModal,
  setShowAccountModal,
  currentBoard,
  setCurrentBoard,
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
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
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
    <>
      {/* mobile */}
      <div className="flex items-center md:hidden">
        <Image
          className="mr-4 h-[25px] w-6"
          src={logoMobile}
          alt="Kanban site logo"
          width="0"
          height="0"
          sizes="100vw"
        />

        <BoardSelect
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
      </div>

      {/* tablet/desktop */}
      <p
        className={clsx(
          "hidden items-center font-medium tracking-wide group-hover:cursor-pointer md:block md:text-[20px] lg:text-[24px]",
          darkMode ? "text-white" : "text-black",
        )}
      >
        {currentBoard.name}
      </p>
    </>
  );
}
