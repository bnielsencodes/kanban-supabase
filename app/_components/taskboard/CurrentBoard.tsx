import data from "../../data";
export default function TaskBoard() {
  return (
    <>
      {cols.length > 0 ? (
        <p>columns here</p>
      ) : (
        <p>empty board</p>
      )}
    </>
  );
}
