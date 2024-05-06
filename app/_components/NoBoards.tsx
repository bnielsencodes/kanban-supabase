export default function NoBoards() {
  return (
    <div className="mx-auto flex h-full w-[343px] flex-col items-center pt-[211px] text-center text-lg font-bold leading-[23px] text-neutral-500">
      <p>There are no boards. Create a new board to get started.</p>
      <button
        className="mt-[25px] h-12 w-[174px] cursor-pointer rounded-3xl border-0 bg-primary font-bold leading-[19px] text-neutral-800 "
      >
        <p className="text-[15px]">+ Add New Board</p>
      </button>
    </div>
  );
}
