import PublicRouter from "./routes/PublicRouter.jsx";
import Home from "./pages/client/Home/Home.jsx";
import BXH from "./pages/client/BXH/BXH.jsx";
import Library from "./pages/client/Library/Library.jsx";
import Settings from "./pages/client/Setting/Settings.jsx";
import Login from "./pages/client/Login - Register/Login.jsx";
import Register from "./pages/client/Login - Register/Register.jsx";
import LibraryNavigator from "./pages/client/Library/LibraryNavigator.jsx";
import UserInfo from "./pages/client/UserInfo/UserInfo.jsx";
import UploadMusic from "./pages/client/UploadMusic.jsx";
import PrivateRouter from "./routes/PrivateRouter.jsx";
import HomeAdmin from "./pages/admin/Home/HomeAdmin.jsx";
import { Routes, Route } from "react-router-dom";
import Music from "./pages/admin/Musics/Music.jsx";
import Account from "./pages/admin/Account/Account.jsx";
import VIP from "./pages/admin/VIPAccount/VIP.jsx";
import LoginWithPhone from "./components/LoginWithPhone.jsx";
function App() {
  return (
    <>
      <Routes>
        // đường dẫn tới public router
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="/BXH" element={<BXH />} />
          <Route path="/Library" element={<Library />}>
            <Route index element={<LibraryNavigator />} />
          </Route>
          <Route path="/Settings" element={<Settings />} />
          <Route path="/User" element={<UserInfo />} />
          <Route path="/Uploads" element={<UploadMusic />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LoginWithPhone" element={<LoginWithPhone/>}/>
        // đường dẫn tới private router
        <Route path="/Admin" element={<PrivateRouter />}>
          <Route index element={<HomeAdmin />} />
          <Route path="Account" element={<Account />} />
          <Route path="Music" element={<Music />} />
          <Route path="VIPAccount" element={<VIP />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
