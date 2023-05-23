//файл оголошення екшенів програми
import { createAction, nanoid } from "@reduxjs/toolkit";
export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});