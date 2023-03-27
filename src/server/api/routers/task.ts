import { createTRPCRouter } from "~/server/api/trpc";
import showTasks from "./taskHelpers";
import createTask from "./taskHelpers/create";
import deleteTask from "./taskHelpers/deleteTask";
import toggleCompleted from "./taskHelpers/toggleCompleted";

export const taskRouter = createTRPCRouter({
  index: showTasks,
  create: createTask,
  delete: deleteTask,
  toggleCompleted: toggleCompleted,
});
