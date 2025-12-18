import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectUsersSlice = (state) => state.users;

export const { selectById: selectUserById, selectTotal: selectTotalUsers } =
  entityAdapter.getSelectors(selectUsersSlice);
