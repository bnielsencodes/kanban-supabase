import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    setChecked(!checked);
  }

  return (
    <div
    >
      <input
        onClick={toggleChecked}
        type="checkbox"
        name=""
        id="checkbox-id"
      />
      <label
        htmlFor="checkbox"
      >
        Research competitor pricing and business models
      </label>
    </div>
  );
}
