import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Feed from "./pages/Feed"


function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/" element={<Login/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/signup" element={<Signup/>} />
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
