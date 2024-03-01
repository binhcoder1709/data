const mysql = require('mysql');

// Thay đổi thông tin kết nối của bạn tại đây
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'house-fly'
});

// Kết nối tới MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ', err);
    return;
  }
  console.log('Đã kết nối thành công tới MySQL');
});

module.exports = connection;