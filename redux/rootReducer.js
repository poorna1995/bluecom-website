import { combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// reducers
import userSlice from "./user/userSlice";
import viewsSlice from "./views/viewsSlice";
import calculatorsSlice from "./calculators/calculatorsSlice";

export const rootReducer = combineReducers({
	user: userSlice,
	views: viewsSlice,
	calculatorsData: calculatorsSlice,
});

// const configStorage = {
// 	key: "root",
// 	storage,
// 	whitelist: ["user", "views"],
// };

export default  rootReducer;
