export default function EmptyBoard({
  setShowAddBoardModal,
}: {
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col items-center w-[343px] h-full mx-auto pt-[211px] text-neutral-500 text-lg font-bold leading-[23px] text-center">
      <p>This board is empty. Create a new column to get started.</p>
      <button
        className="w-[174px] h-12 border-0 rounded-3xl mt-[25px] bg-primary text-neutral-800 font-bold leading-[19px] cursor-pointer "
      >
        <p className="text-[15px]">+ Add New Column</p>
      </button>
    </div>
  );
}
