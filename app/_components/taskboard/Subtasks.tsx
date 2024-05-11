import Checkbox from "../Checkbox";

export default function Subtasks() {
  return (
    <div className="subtasks">
      <p className="subtasks--title">{`Subtasks (0 of 0)`}</p>
      <div>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
    </div>
  );
}
