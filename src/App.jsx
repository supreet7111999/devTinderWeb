import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Feed from "./pages/Feed"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Connection from "./pages/Connection"


function App() {

  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/connection" element={<Connection/>} />
        </Route>
       </Routes>
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
