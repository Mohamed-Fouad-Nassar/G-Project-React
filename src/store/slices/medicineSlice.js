import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { MEDICINES } from "../../API";

// fetch medicines thunk
export const fetchMedicines = createAsyncThunk(
  "medicines-slice/fetchMedicines",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(MEDICINES);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add medicine
export const addMedicine = createAsyncThunk(
  "medicine-slice/addMedicine",
  async (medicine, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(MEDICINES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medicine),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit medicine
export const editMedicine = createAsyncThunk(
  "medicine-slice/editMedicine",
  async (medicine, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(MEDICINES, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medicine),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove medicine
export const removeMedicine = createAsyncThunk(
  "medicine-slice/removeMedicine",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${MEDICINES}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const medicineSlice = createSlice({
  name: "medicine-slice",
  initialState: {
    loading: false,
    err: null,
    medicines: [],
    singleMedicine: {},
  },
  reducers: {
    getSingleMedicine: (state, action) => {
      state.loading = true;
      let filteredMedicine = state.medicines.find(
        (medicine) => medicine.id == action.payload
      );
      state.singleMedicine = filteredMedicine;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch doctors
    builder.addCase(fetchMedicines.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.medicines = [];
    });
    builder.addCase(fetchMedicines.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.medicines = action.payload;
    });
    builder.addCase(fetchMedicines.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.medicines = [];
    });

    // add doctor
    builder.addCase(addMedicine.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addMedicine.fulfilled, (state, action) => {
      state.loading = false;
      state.medicines.push(action.payload);
      state.err = null;
    });
    builder.addCase(addMedicine.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit doctor
    builder.addCase(editMedicine.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editMedicine.fulfilled, (state, action) => {
      state.loading = false;
      state.medicines.filter((item) => item.id === action.payload.id);
      state.medicines.push(action.payload);
      state.err = null;
    });
    builder.addCase(editMedicine.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove doctor
    // builder.addCase(removeDoctor.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removeMedicine.fulfilled, (state, action) => {
      // state.loading = false;
      state.medicines = state.medicines.filter(
        (medicine) => medicine.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removeMedicine.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSingleMedicine } = medicineSlice.actions;

export default medicineSlice.reducer;
