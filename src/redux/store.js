import { configureStore } from "@reduxjs/toolkit";
import Blogs from "./Slice/Blogs/Blogs";

export default configureStore({
  reducer: {
    blogs: Blogs,
  },
});
