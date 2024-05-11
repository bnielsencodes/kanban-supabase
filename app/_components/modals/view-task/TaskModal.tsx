import Image from "next/image";
import ellipsisIcon from "/public/assets/icon-vertical-ellipsis.svg";
import Subtasks from "../../taskboard/Subtasks";

export default function TaskModal() {
  return (
    <div className="task-modal">
      <div className="task-modal--title-container">
        <p className="task-modal--title">
          Research pricing points of various competitors and trial different
          business models
        </p>
        <Image
          className="w-6 h-[25px] mr-4 "
          src={ellipsisIcon}
          alt="veritcal ellipsis icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <p className="task--description">
        We know what we<span>&apos</span>re planning to build for version one.
        Now we need to finalize the first pricing model we<span>&apos</span>ll
        use. Keep iterating the subtasks until we have a coherent proposition.
      </p>
      <Subtasks />
      <div className="current-status">
        <label htmlFor="select-status">Current Status</label>
        <select name="" id="select-status">
          <option value="doing">Doing</option>
          <option value="not-doing">Todo</option>
        </select>
      </div>
    </div>
  );
}
