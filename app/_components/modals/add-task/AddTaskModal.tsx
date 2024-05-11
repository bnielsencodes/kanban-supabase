export default function AddTaskModal() {
  return (
    <div className="add-task-modal">
      <form className="add-task-form" action="" method="post">
        <p className="add-task-form-title">Add New Task</p>
        <div>
          <label htmlFor="add-task-title">Title</label>
          <br />
          <input
            type="text"
            name=""
            id="add-task-title-input"
            placeholder="e.g. Take coffee break"
          />
        </div>
        <div>
          <label htmlFor="add-task-desc">Description</label>
          <br />
          <textarea
            name=""
            id=""
            cols=""
            rows="4"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          ></textarea>
        </div>
        <fieldset className="add-subtasks">
          <legend>Subtasks</legend>
          <button className="add-subtask-btn">+ Add New Subtask</button>
        </fieldset>
        <div className="current-status">
          <label htmlFor="select-status">Status</label>
          <select name="" id="select-status">
            <option value="doing">Doing</option>
            <option value="not-doing">Todo</option>
          </select>
        </div>
        <button className="create-task-btn">Create Task</button>
      </form>
    </div>
  );
}
