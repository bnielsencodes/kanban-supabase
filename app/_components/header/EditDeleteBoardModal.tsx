import clsx from "clsx";

export default function EditDeleteBoardModal({
  darkMode,
  showEditDeleteBoardModal,
  setShowEditDeleteBoardModal,
  setShowEditBoardModal,
  setShowDeleteBoardModal,
}: {
  darkMode: boolean;
  showEditDeleteBoardModal: boolean;
  setShowEditDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={clsx(
        "absolute right-0 top-0 z-30 h-screen w-screen cursor-default select-none",
        showEditDeleteBoardModal
          ? "visible opacity-100"
          : "invisible opacity-0",
      )}
      onClick={() => setShowEditDeleteBoardModal(false)}
    >
      <div
        className={clsx(
          "edit-delete-board-modal relative z-40 mb-0 ml-auto mr-4 mt-[57px] flex w-[192px] select-none flex-col gap-4 rounded-lg pb-[17px] pl-[17px] pt-[17px] md:mr-6 md:mt-[75px] lg:mt-[90px]",
          darkMode ? "bg-background-dark" : "bg-white",
          showEditDeleteBoardModal
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2/4 opacity-0",
        )}
      >
        <button
          className="text-grey-medium text-left text-[13px] leading-[23px] hover:text-opacity-80"
          onClick={() => setShowEditBoardModal(true)}
        >
          Edit Board
        </button>

        <button
          className="text-left text-[13px] leading-[23px] text-warning lg:hover:text-warning-hover"
          onClick={() => setShowDeleteBoardModal(true)}
        >
          Delete Board
        </button>
      </div>
    </div>
  );
}
