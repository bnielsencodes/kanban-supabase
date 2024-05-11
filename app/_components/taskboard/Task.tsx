export default function Task({
  item,
}: {
  item: {
    id: number;
    title: string;
    completedSubtasks: number;
    totalSubtasks: number;
  };
}) {
  return (
    <div className="task">
      <p className="task--title">{item.title}</p>
      <p className="num-of-subtasks">
        {item.completedSubtasks} of {item.totalSubtasks} subtasks
      </p>
    </div>
  );
}
