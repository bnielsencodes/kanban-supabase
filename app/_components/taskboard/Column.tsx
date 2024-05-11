export default function Column({
  item,
  cols,
}: {
  item: {
    id: number;
    title: string;
    color: string;
    tasks: {
      id: number;
      title: string;
      completedSubtasks: number;
      totalSubtasks: number;
    }[];
  };
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
    <div className="column">
      <div className="column-title-container">
        <div className="column-title--color-dot"></div>
        <p className="column-title"></p>
      </div>
    </div>
  );
}
