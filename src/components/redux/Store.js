import { configureStore } from "@reduxjs/toolkit";
import ReduxSlice from "./ReduxSlice";

export default configureStore({
  reducer: {
    info: ReduxSlice,
  },
});
