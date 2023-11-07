import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PHARMACIES } from "../../API";

// fetch pharmacy thunk
export const fetchPharmacies = createAsyncThunk(
  "pharmacy-slice/fetchPharmacies",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(PHARMACIES);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add pharmacy
export const addPharmacy = createAsyncThunk(
  "pharmacy-slice/addPharmacy",
  async (pharmacy, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(PHARMACIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pharmacy),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit pharmacy
export const editPharmacy = createAsyncThunk(
  "pharmacy-slice/editPharmacy",
  async (pharmacy, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(PHARMACIES, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pharmacy),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove pharmacy
export const removePharmacy = createAsyncThunk(
  "pharmacy-slice/removePharmacy",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${PHARMACIES}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const pharmacySlice = createSlice({
  name: "pharmacy-slice",
  initialState: {
    loading: true,
    err: null,
    pharmacies: [],
    singlePharmacy: {},
  },
  reducers: {
    getSinglePharmacy: (state, action) => {
      state.loading = true;
      let filteredPharmacy = state.pharmacies.find(
        (pharmacy) => pharmacy.id == action.payload
      );
      state.singlePharmacy = filteredPharmacy;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch pharmacies
    builder.addCase(fetchPharmacies.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.pharmacies = [];
    });
    builder.addCase(fetchPharmacies.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.pharmacies = action.payload;
    });
    builder.addCase(fetchPharmacies.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.pharmacies = [];
    });

    // add pharmacy
    builder.addCase(addPharmacy.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addPharmacy.fulfilled, (state, action) => {
      state.loading = false;
      state.pharmacies.push(action.payload);
      state.err = null;
    });
    builder.addCase(addPharmacy.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit pharmacy
    builder.addCase(editPharmacy.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editPharmacy.fulfilled, (state, action) => {
      state.loading = false;
      state.pharmacies.filter((item) => item.id === action.payload.id);
      state.pharmacies.push(action.payload);
      state.err = null;
    });
    builder.addCase(editPharmacy.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove pharmacy
    // builder.addCase(removePharmacy.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removePharmacy.fulfilled, (state, action) => {
      // state.loading = false;
      state.pharmacies = state.pharmacies.filter(
        (pharmacy) => pharmacy.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removePharmacy.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSinglePharmacy } = pharmacySlice.actions;

export default pharmacySlice.reducer;
