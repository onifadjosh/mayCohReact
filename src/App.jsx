import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import User from "./pages/User";
import Effect from "./pages/Effect";
import Fetch from "./pages/Fetch";
import Formikk from "./pages/Formikk";
import Upload from "./pages/Upload";
import AllStudents from "./pages/AllStudents";
import Login from "./pages/Login";
import Transfer from "./pages/Transfer";
import Authguard from "./Auth/Authguard";

function App() {
  const isAuth = localStorage.getItem("token")
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/formik" element={<Formikk />} />
        <Route element={<Authguard isAuth={isAuth}/>}>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/sp-contact" element={<Navigate to={"/contact"} />} />

          <Route path="/user/:username/:id" element={<User />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/fetchStudents" element={<AllStudents />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
