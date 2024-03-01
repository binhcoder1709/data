import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import HeaderLogin from "../layouts/client/HeaderLogin/HeaderLogin";
import { Button, Input, notification } from "antd";
import baseUrl from "../api/axios";
import { Link } from "react-router-dom";

export default function LoginWithPhone() {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [OTP, setOTP] = useState("");
  const [listUSer, setListUser] = useState([]);
  const [userExist, setUserExist] = useState(true);
  console.log(user);
  // hàm lấy mã OTP
  const handleSendOTP = async () => {
    try {
      const reCaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        reCaptcha
      );
      setUser(confirmation);
      setCaptchaSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  // hàm giải mã OTP
  const verifyOTP = async () => {
    try {
      const data = await user.confirm(OTP);
      if (data) {
        baseUrl.get("users").then(res =>
          {
            setListUser(res.data)
            const userExist = listUSer.find(user => user.phone_number == phoneNumber)
            if(userExist)
            {
              localStorage.setItem("userLogin", JSON.stringify(userExist))
              notification.success({
                message: "Thành công",
                description: "Đăng nhập thành công"
              })
            }
            else
            {
              notification.error({
                message: "Thất bại",
                description: `Số điện thoại chưa được đăng ký tài khoản`
              })
            }
          })
      }
    } catch (error) {
      notification.error({
        message: "Thất bại",
        description: "Mã xác nhận không đúng",
      });
    }
  };
  return (
    <>
      <div>
        <HeaderLogin />
        <div className="login-container mt-[70px] gap-2 w-full h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <div className="p-5 h-[400px] flex flex-col gap-2 bg-[#060442]">
            <h1>Đăng nhập bằng số điện thoại</h1>
            <PhoneInput
              country={"vn"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber("+" + phone)}
            />
            {phoneNumber != null ? (
              <Button onClick={handleSendOTP} className="w-[100px]">
                Lấy mã
              </Button>
            ) : (
              <Button onClick={handleSendOTP} className="w-[100px]" disabled>
                Lấy mã
              </Button>
            )}
            <div id="recaptcha"></div>
            {captchaSuccess && (
              <>
                <Input
                  placeholder="Nhập mã xác nhận"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <Button onClick={verifyOTP}>Xác nhận</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
