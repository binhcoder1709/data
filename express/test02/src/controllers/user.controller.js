import connection from "../config/mysql.config.js";

// lấy toàn bộ dữ liệu user
const getAllUser = async (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn: ", err);
      res.status(500).send("Lỗi server");
      return;
    }
    res.json(results);
  });
};

const loginUser = async (req, res) =>
{
  const {userID, user_name, email, password, phone_number, role, status, created_at} = req.body
  connection.query("SELECT * FROM users WHERE email = ?")
}

//đăng ký tài khoản
const createAccount = async (req, res) =>
{
    connection.query("INSERT INTO users")
}

export { getAllUser };
