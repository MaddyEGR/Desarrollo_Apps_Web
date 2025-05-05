import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
        {
            'name': 'Graduarme de la Universidad',
        }
    ],
  },
  reducers: {
    addGoal: (state, action) => {
        console.log(action.payload);
        state.value.push(action.payload);
    },
    initAddGoal: (state, action) => {
        console.log(action.payload);
        state.value.push(action.payload);
    },
    removeGoal: (state, action) => {
        console.log(action.payload);
        state.value = state.value.filter((goal) => goal.name !== action.payload);
    },
  },
});

export const { addGoal, initAddGoal, removeGoal } = todoSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default todoSlice.reducer;