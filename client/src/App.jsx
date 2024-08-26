import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sign-in" element={<SignIn/>} />
    <Route path="/Sign-up" element={<SignUp/>} />
    <Route path="/about" element={<About/>} />
    <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
