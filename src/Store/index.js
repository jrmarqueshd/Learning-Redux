import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../Reducer";

const persistConfig = {
	key: "store",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storePersisted = () => {
	let store = createStore(persistedReducer);
	let persistor = persistStore(store);

	return { store, persistor };
};

export default storePersisted();
