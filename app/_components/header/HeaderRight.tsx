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
      {/* add task buttons */}
      {/* mobile */}
      <button className="flex h-8 w-12 cursor-pointer items-center justify-center rounded-2xl border-0 bg-primary opacity-25 md:hidden">
        <Image
          src={iconAdd}
          alt="add task icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      </button>
      {/* tablet/desktop */}
      <button
        className="text-white hidden h-12 w-[164px] rounded-3xl bg-primary text-[15px] font-medium leading-[15.5px] transition-colors md:block lg:hover:bg-primary-hover"
      >
        + Add New Task
      </button>

      {/* ellipsis button */}
      <button
        className="h-10 cursor-pointer pl-4 pr-5 md:ml-2"
        onClick={() => {
          setShowEditDeleteBoardModal(true);
        }}
      >
        <Image
          className="h-4 w-[3.62px] md:h-5 md:w-[4.62px]"
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
