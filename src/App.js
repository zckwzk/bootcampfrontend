import React from "react";
import "./App.css";
import { Route, Routes, useParams, Outlet, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Day8 from "./pages/Day8";
import Day9 from "./pages/Day9";
import RegisterPage from "./pages/RegisterPage";
import VerificationPage from "./pages/VerificationPage";
import UploadBase64 from "./pages/UploadBase64";

const ProtectedRoute = ({ user, redirectPath = "/day9" }) => {
  const [loading, setLoading] = React.useState(true);
  const [hasUser, setHasUser] = React.useState(false);
  // React.useEffect(()=>{
  //   let user = localStorage.getItem('jwttoken')
  // },[])
  if(loading){
    return <h3>Loading</h3>
  }
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Day8 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/day9" element={<Day9 />} />

        <Route element={<ProtectedRoute user={false} />}>
          <Route path="/base64" element={<UploadBase64 />} />
        </Route>
        
        
        <Route path="/verify/:token" element={<VerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
