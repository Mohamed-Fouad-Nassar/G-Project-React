import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { DOCTORS } from "../../API";

// fetch doctors thunk
export const fetchDoctors = createAsyncThunk(
  "doctor-slice/fetchDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(DOCTORS);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add doctor
export const addDoctor = createAsyncThunk(
  "doctor-slice/addDoctor",
  async (doctor, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(DOCTORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit doctor
export const editDoctor = createAsyncThunk(
  "doctor-slice/editDoctor",
  async (doctor, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(DOCTORS, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove doctor
export const removeDoctor = createAsyncThunk(
  "doctor-slice/removeDoctor",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${DOCTORS}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const doctorSlice = createSlice({
  name: "doctor-slice",
  initialState: { loading: true, err: null, doctors: [], singleDoctor: {} },
  reducers: {
    getSingleDoctor: (state, action) => {
      state.loading = true;
      let filteredDoctor = state.doctors.find(
        (doctor) => doctor.id == action.payload
      );
      state.singleDoctor = filteredDoctor;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch doctors
    builder.addCase(fetchDoctors.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.doctors = [];
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.doctors = action.payload;
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.doctors = [];
    });

    // add doctor
    builder.addCase(addDoctor.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.doctors.push(action.payload);
      state.err = null;
    });
    builder.addCase(addDoctor.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit doctor
    builder.addCase(editDoctor.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.doctors.filter((item) => item.id === action.payload.id);
      state.doctors.push(action.payload);
      state.err = null;
    });
    builder.addCase(editDoctor.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove doctor
    // builder.addCase(removeDoctor.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removeDoctor.fulfilled, (state, action) => {
      // state.loading = false;
      state.doctors = state.doctors.filter(
        (doctor) => doctor.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removeDoctor.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSingleDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
