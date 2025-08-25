import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer, { logoutUser } from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist specific actions
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/REGISTER',
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export const getAuthToken = () => {
  const state = store.getState();
  return state?.user?.token || '';
};

export const getRefreshToken = () => {
  const state = store.getState();
  return state?.user?.refreshToken || '';
};

export const performLogout = async () => {
  store.dispatch(logoutUser());   
  await persistor.purge();        
};
