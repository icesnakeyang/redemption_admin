import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import commonSlice from "./commonSlice";
import adminSlice from "./adminSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  commonSlice,
  adminSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
