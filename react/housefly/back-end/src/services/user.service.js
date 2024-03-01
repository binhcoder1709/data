import connection from "../config/mysql.config.js";

const getAllUsersService = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users", (err, results) => {
      if (err) {
        reject("Lỗi máy chủ"); // Trả về một promise bị reject nếu có lỗi
        return;
      }
      resolve(results); // Trả về kết quả của truy vấn nếu thành công
    });
  });
};

const createAccountService = (userData) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO users SET ?", userData, (err, results) => {
      if (err) {
        reject("Lỗi máy chủ");
        return;
      }
      resolve(results);
    });
  });
};

export { getAllUsersService, createAccountService };
