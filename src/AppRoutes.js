import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BeatLoader } from "react-spinners";
const Auth = lazy(() => import("./Pages/Auth/Auth"));
const Register = lazy(() => import("./Pages/Register/Register"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Notfound = lazy(() => import("./Pages/Notfound"));

const AppRoutes = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <BeatLoader color="#36d7b7" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default AppRoutes;
