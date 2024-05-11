export default function Checkbox() {
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
