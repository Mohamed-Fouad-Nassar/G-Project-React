import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CHARITIES } from "../../API";

// fetch charities thunk
export const fetchCharities = createAsyncThunk(
  "charity-slice/fetchCharities",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(CHARITIES);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add charity
export const addCharity = createAsyncThunk(
  "charity-slice/addCharity",
  async (charity, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(CHARITIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(charity),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit charity
export const editCharity = createAsyncThunk(
  "charity-slice/editCharity",
  async (charity, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(CHARITIES, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(charity),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove charity
export const removeCharity = createAsyncThunk(
  "charity-slice/removeCharity",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${CHARITIES}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const charitySlice = createSlice({
  name: "charity-slice",
  initialState: { loading: true, err: null, charities: [], singleCharity: {} },
  reducers: {
    getSingleCharity: (state, action) => {
      state.loading = true;
      let filteredCharities = state.charities.find(
        (charity) => charity.id == action.payload
      );
      state.singleCharity = filteredCharities;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch charity
    builder.addCase(fetchCharities.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.charities = [];
    });
    builder.addCase(fetchCharities.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.charities = action.payload;
    });
    builder.addCase(fetchCharities.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.charities = [];
    });

    // add charity
    builder.addCase(addCharity.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addCharity.fulfilled, (state, action) => {
      state.loading = false;
      state.charities.push(action.payload);
      state.err = null;
    });
    builder.addCase(addCharity.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit charity
    builder.addCase(editCharity.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editCharity.fulfilled, (state, action) => {
      state.loading = false;
      state.charities.filter((item) => item.id === action.payload.id);
      state.charities.push(action.payload);
      state.err = null;
    });
    builder.addCase(editCharity.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove charity
    // builder.addCase(removeCharity.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removeCharity.fulfilled, (state, action) => {
      // state.loading = false;
      state.charities = state.charities.filter(
        (charity) => charity.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removeCharity.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSingleCharity } = charitySlice.actions;

export default charitySlice.reducer;
