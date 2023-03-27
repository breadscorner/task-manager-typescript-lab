import { type FormEvent } from "react";
import { api } from "~/utils/api";
import type { Task } from "@prisma/client";
import getReloader from "./Reloader";
export const TaskController = () => {
const reload = getReloader();

  //----------CREATE------------
  // Create Task Mutation
  const createTaskMutation = api.task.create.useMutation({
    onSuccess: reload,
  });
  // Create Task Handler
  const createTask = (e: FormEvent, title: string) => {
    e.preventDefault();
    createTaskMutation.mutate({ title });
  };
  //---------------------------

  //----------READ-------------
  // Get Tasks Query
  const getTasksQuery = api.task.index.useQuery().data;
  // Get Tasks Handler
  const getTasks = (status: string) => {
    const tasks = getTasksQuery;
    return tasks?.filter((task: Task) =>
      status === "completed" ? task.completed : !task.completed
    );
  };
  //---------------------------

  //----------UPDATE-------------
  // Update Task Mutation
  const updateTaskMutation = api.task.toggleCompleted.useMutation({
    onSuccess: reload,
  });
  // Update Task Handler
  const updateTask = (task: Task) => {
    updateTaskMutation.mutate({ id: task.id });
  };
  //---------------------------

  //----------DELETE-----------
  // Delete Tasks Handler
  const deleteTask = (task: Task) => {
    deleteTaskMutation.mutate({ id: task.id });
  };
  //Delete Tasks Mutation
  const deleteTaskMutation = api.task.delete.useMutation({
    onSuccess: reload,
  });
  
  //---------------------------

  return {
    handleToggleCompleted: updateTask,
    handleDelete: deleteTask,
    getFilteredTasks: getTasks,
    handleSubmit: createTask,
  };
};

export interface Props {
  status: "completed" | "incomplete";
}
