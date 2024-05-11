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
  return (
    <div className="task-list">
    </div>
  );
}
