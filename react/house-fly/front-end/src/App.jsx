import { Route, Routes } from "react-router-dom"
import Header from "./layouts/client/Header"
import PublicRouter from "./router/PublicRouter"
import Home from "./pages/client/Home"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
