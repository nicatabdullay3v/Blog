import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios(`http://localhost:3000/user/1`);
    return response.data;
  }
);
export const PostBlog = createAsyncThunk(
  "users/PostBlogStatus",
  async (obj) => {
    const response = await axios.patch(`http://localhost:3000/user/1`,obj)
    return response.data;
  }
);

export const blogs = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    textarea: ""
  },
  reducers: {

    getvalue: (state, action) => {
      state.textarea = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    
  },
});
export const {getvalue} = blogs.actions;

export default blogs.reducer;
