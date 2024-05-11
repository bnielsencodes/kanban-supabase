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
      className={`absolute top-0 right-0 z-30 w-screen h-screen select-none cursor-default ${
        showEditDeleteBoardModal ? "opacity-100" : "opacity-0"
      } ${showEditDeleteBoardModal ? "visible" : "invisible"}`}
      onClick={() => setShowEditDeleteBoardModal(false)}
    >
      <div
        className={`edit-delete-board-modal relative z-40 flex flex-col gap-4 w-[192px] pt-[17px] pb-[17px] pl-[17px] rounded-lg mt-[57px] mr-[23px] mb-0 ml-auto ${
          darkMode ? "bg-neutral-200" : "bg-neutral-800"
        } select-none ${
          showEditDeleteBoardModal
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2/4"
        }`}
      >
        <button
          className="text-neutral-500 text-[13px] leading-[23px] text-left"
          onClick={() => setShowEditBoardModal(true)}
        >
          Edit Board
        </button>
        <button
          className="text-warning text-[13px] leading-[23px] text-left"
          onClick={() => setShowDeleteBoardModal(true)}
        >
          Delete Board
        </button>
      </div>
    </div>
  );
}
