import React, { useState } from "react";
import HeaderLogin from "../../../layouts/client/HeaderLogin/HeaderLogin.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { GoogleProvider, auth } from "../../../firebase/firebase.config.js";
import { signInWithPopup } from "firebase/auth";
import baseUrl from "../../../api/axios.js";
import { notification } from "antd";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    // Hàm xử lý đăng nhập bằng Google
    signInWithPopup(auth, GoogleProvider)
      .then((res) => {
        // Xử lý phản hồi từ server
        baseUrl
          .get("users/email")
          .then((res) => {
            if (res.status === 200) {
              // Đăng nhập thành công
              console.log("Đăng nhập thành công");
            }
          })
          .catch((err) => {
            if (err.response.status === 404) {
              // Tài khoản không tồn tại hoặc email và mật khẩu không đúng
              console.log("Tài khoản không đúng");
              notification.error({
                message: "Thất bại",
                description: "Email hoặc mật khẩu không đúng",
              });
            }
          });
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      password: Yup.string().required("Vui lòng nhập password"),
    }),
    onSubmit: async (values) => {
      try {
        // Đăng nhập bằng email và password
        const res = await baseUrl.post("users/login", values);
        if (res.status === 200) {
          // Đăng nhập thành công
          alert("thành công");
        }
      } catch (error) {
        if (error.response) {
          // Nếu là một lỗi phản hồi từ server
          if (error.response.status === 404) {
            // Tài khoản không tồn tại hoặc email và mật khẩu không đúng
            notification.error({
              message: "Thất bại",
              description: "Email hoặc mật khẩu không đúng",
            });
          }
        } else {
          // Nếu là lỗi promise
          console.error(error);
          notification.error({
            message: "Lỗi",
            description: "Đã xảy ra lỗi khi đăng nhập, vui lòng thử lại sau",
          });
        }
      }
    },
  });
  

  return (
    <>
      <div>
        <HeaderLogin />
        <div className="login-container mt-[70px] gap-2 w-full h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <h1 className="text-[#00ff00] text-3xl">Đăng nhập</h1>
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-3 p-[20px] w-[500px] bg-[#060442]"
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                className="bg-transparent outline-none border-b-2 border-b-white w-full p-[10px] text-white"
                placeholder="Nhập email..."
                id="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className="bg-transparent outline-none border-b-2 border-b-white w-full p-[10px] text-white"
                placeholder="••••••••"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="flex justify-between">
              <div>
                <Link className="hover:text-[#00ff00] transition">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="flex">
                <input type="checkbox" id="rememberInfo" />
                <label htmlFor="rememberInfo">
                  Ghi nhớ thông tin đăng nhập
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-[#060442] p-[10px] rounded-md cursor-pointer hover:bg-[#060442] hover:border-white border-2 border-transparent transition hover:text-[#00ff00] bg-[#00ff00]"
              >
                Đăng nhập
              </button>
            </div>
            <span className="text-red-600"></span>
            <span className="text-center">hoặc</span>
            <div className="flex justify-center gap-3">
              <button
                onClick={loginWithGoogle}
                className="hover:border-white hover:text-[#00ff00] transition p-[5px] rounded-md border-2 border-transparent"
              >
                <FontAwesomeIcon icon={faGoogle} /> Đăng nhập bằng Google
              </button>
              <Link
                to="/LoginWithPhone"
                className="hover:border-white hover:text-[#00ff00] transition p-[5px] rounded-md border-2 border-transparent"
              >
                <FontAwesomeIcon icon={faPhone} /> Đăng nhập bằng số điện thoại
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
