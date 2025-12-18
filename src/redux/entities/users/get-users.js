import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectTotalUsers } from "./slice";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectTotalUsers(getState());
    },
  }
);
