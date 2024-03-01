import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios.js";

// hàm tìm kiếm tất cả dữ liệu về người dùng
export const findAll = createAsyncThunk("user/findAll", async () => {
  try {
    const response = await baseUrl.get("users");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// hàm đăng ký tài khoản người dùng
export const createAccount = createAsyncThunk("user/create", async (userData) => {
  try {
    const response = await baseUrl.post("users", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
