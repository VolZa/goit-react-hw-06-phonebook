import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsInitialState = [];
const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, toggleCompleted } = contactsSlice.actions;
export const tasksReducer = contactsSlice.reducer;