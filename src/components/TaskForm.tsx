import { useState } from "react";
import { TaskController } from "./TaskController";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { handleSubmit } = TaskController();

  return (
    <div className="card">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            handleSubmit(e, title);
            setTitle("");
          }}
          className="flex gap-4"
        >
          <input
            className="input-bordered input-primary input w-full"
            type="text"
            placeholder="Enter Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn-primary btn flex gap-2">Submit</button>
        </form>
      </div>
    </div>
  );
};
