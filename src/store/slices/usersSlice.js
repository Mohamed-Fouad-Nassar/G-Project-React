import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { USERS } from "../../API";

// fetch users thunk
export const fetchUsers = createAsyncThunk(
  "users-slice/fetchUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(USERS);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add users
export const addUser = createAsyncThunk(
  "users-slice/addUser",
  async (users, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(USERS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit users
export const editUser = createAsyncThunk(
  "users-slice/editUser",
  async (users, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(USERS, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove users
export const removeUser = createAsyncThunk(
  "users-slice/removeUser",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${USERS}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users-slice",
  initialState: { loading: true, err: null, users: [], singleUser: {} },
  reducers: {
    getSingleUser: (state, action) => {
      state.loading = true;
      let filteredUsers = state.users.find((user) => user.id == action.payload);
      state.singleUser = filteredUsers;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch users
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.users = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.users = [];
    });

    // add user
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      state.err = null;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit user
    builder.addCase(editUser.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      state.err = null;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove user
    builder.addCase(removeUser.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.err = null;
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export default usersSlice.reducer;
