import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/usersSlice";
import doctorReducer from "./slices/DoctorSlice";
import medicinesReducer from "./slices/medicineSlice";
import hospitalsReducer from "./slices/hospitalSlice";
import pharmaciesReducer from "./slices/pharmacySlice";
import articlesReducer from "./slices/articleSlice";
import charitiesReducer from "./slices/charitySlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    doctors: doctorReducer,
    medicines: medicinesReducer,
    hospitals: hospitalsReducer,
    pharmacies: pharmaciesReducer,
    articles: articlesReducer,
    charities: charitiesReducer,
  },
});
