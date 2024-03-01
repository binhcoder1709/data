import { createSlice } from "@reduxjs/toolkit";
import { createAccount, findAll } from "../../services/users.service";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    userEdit: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAll.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAll.fulfilled, (state, action) => {
        state.status = "Successfully!"; // trả về trạng thái thành công
        state.data = action.payload; // gán lại dữ liệu lấy từ api cho giá trị khởi tạo
      })
      .addCase(findAll.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message; // lấy ra nội dung lỗi
      })
      // hành động cho hàm tạo tài khoản
      .addCase(createAccount.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = "Successfully!";
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
