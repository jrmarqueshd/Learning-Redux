import { createStore } from "redux";

import todoApp from "../Reducer/TodoReducer";

const store = createStore(todoApp);
