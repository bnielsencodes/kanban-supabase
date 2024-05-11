import Image from "next/image";
import iconAdd from "/public/assets/icon-add-task-mobile.svg";
import iconEllipsis from "/public/assets/icon-vertical-ellipsis.svg";

export default function HeaderRight({
  setShowEditDeleteBoardModal,
}: {
  setShowEditDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center">
      <button className="flex items-center justify-center w-12 h-8 border-0 rounded-2xl bg-primary opacity-25 cursor-pointer">
        <Image
          src={iconAdd}
          alt="add task icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      </button>
      <button
        className="w-[3.692px] h-4 ml-4 cursor-pointer"
        onClick={() => {
          setShowEditDeleteBoardModal(true);
        }}
      >
        <Image
          src={iconEllipsis}
          alt="vertical ellipsis icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      </button>
    </div>
  );
}
