/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { type Props } from "./TaskController";
import { TaskController } from "./TaskController";
import { SingleTask } from "./SingleTask";

export const TaskList: React.FC<Props> = ({ status }: Props) => {
  const { getFilteredTasks } = TaskController();
  const [animationParent] = useAutoAnimate();
  const tasks = getFilteredTasks(status);

  return (
    <ul ref={animationParent}>
      {tasks?.map((task) => (
        <SingleTask key={task.id} {...task} />
      ))}
    </ul>
  );
};
