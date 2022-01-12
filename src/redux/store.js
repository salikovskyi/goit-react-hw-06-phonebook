import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from "./contacts/contactsReducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const phonebookPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(
  phonebookPersistConfig,
  phonebookReducer
);

const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
