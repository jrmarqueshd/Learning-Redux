import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import persistedStore from "./Store/index";
import App from "./Components/App";

console.log(persistedStore);

ReactDOM.render(
	<Provider store={persistedStore.store}>
		<PersistGate loading={false} persistor={persistedStore.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
