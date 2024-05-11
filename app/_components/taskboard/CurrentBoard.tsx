import { useState } from "react";
import data from "../../data";

export default function TaskBoard() {
  const [cols] = useState(data[0].columns);

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
