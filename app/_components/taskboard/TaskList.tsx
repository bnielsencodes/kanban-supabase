import Task from "./Task";

export default function TaskList({
  cols,
}: {
  cols: {
    id: number;
    title: string;
    color: string;
    tasks: {
      id: number;
      title: string;
      completedSubtasks: number;
      totalSubtasks: number;
    }[];
  }[];
}) {
  const tasks = cols[0].tasks;

  // map through data.js to create task components
  const task = tasks.map((item) => {
    return <Task key={item.id} {...{ item }} />;
  });

  return (
    <div className="task-list">
      {task}
    </div>
  );
}
