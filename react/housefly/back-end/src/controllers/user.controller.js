import connection from "../config/mysql.config.js";
import {
  createAccountService,
  getAllUsersService,
} from "../services/user.service.js";

// lấy toàn bộ dữ liệu user
const getAllUsersController = async (req, res) => {
  const response = await getAllUsersService();
  res.send(response);
};

const loginUser = async (req, res) => {
  const { email } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Lỗi máy chủ" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Email không tồn tại" });
      }

      // So sánh mật khẩu
      const user = results[0];
      if (user.password === password) {
        return res.status(200).json({ message: "Đăng nhập thành công" });
      } else {
        return res.status(401).json({ message: "Sai mật khẩu" });
      }
    }
  );
};

//đăng ký tài khoản
const createAccountController = async (req, res) => {
  try {
    const userData = req.body;
    const response = await createAccountService(userData);
    res.send(response);
  } catch (error) {
    if (error) {
      res.status(500).json("Lỗi thêm dữ liệu");
    }
  }
};

export { getAllUsersController, loginUser, createAccountController };
