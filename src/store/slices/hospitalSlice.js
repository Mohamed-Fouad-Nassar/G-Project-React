import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { HOSPITALS } from "../../API";

// fetch hospital thunk
export const fetchHospitals = createAsyncThunk(
  "hospital-slice/fetchHospitals",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(HOSPITALS);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add hospital
export const addHospital = createAsyncThunk(
  "hospital-slice/addHospital",
  async (hospital, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(HOSPITALS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hospital),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit hospital
export const editHospital = createAsyncThunk(
  "hospital-slice/editHospital",
  async (hospital, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(HOSPITALS, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hospital),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove hospital
export const removeHospital = createAsyncThunk(
  "hospital-slice/removeHospital",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${HOSPITALS}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const hospitalSlice = createSlice({
  name: "hospital-slice",
  initialState: {
    loading: true,
    err: null,
    hospitals: [],
    singleHospital: {},
  },
  reducers: {
    getSingleHospital: (state, action) => {
      state.loading = true;
      let filteredHospital = state.hospitals.find(
        (hospital) => hospital.id == action.payload
      );
      state.singleHospital = filteredHospital;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch hospitals
    builder.addCase(fetchHospitals.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.hospitals = [];
    });
    builder.addCase(fetchHospitals.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.hospitals = action.payload;
    });
    builder.addCase(fetchHospitals.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.hospitals = [];
    });

    // add hospital
    builder.addCase(addHospital.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addHospital.fulfilled, (state, action) => {
      state.loading = false;
      state.hospitals.push(action.payload);
      state.err = null;
    });
    builder.addCase(addHospital.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit hospital
    builder.addCase(editHospital.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editHospital.fulfilled, (state, action) => {
      state.loading = false;
      state.hospitals.filter((item) => item.id === action.payload.id);
      state.hospitals.push(action.payload);
      state.err = null;
    });
    builder.addCase(editHospital.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove hospital
    // builder.addCase(removeHospital.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removeHospital.fulfilled, (state, action) => {
      // state.loading = false;
      state.hospitals = state.hospitals.filter(
        (hospital) => hospital.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removeHospital.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSingleHospital } = hospitalSlice.actions;

export default hospitalSlice.reducer;
