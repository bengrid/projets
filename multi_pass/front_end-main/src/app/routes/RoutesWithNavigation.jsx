import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Routes from "./Routes";
import { selectIsLogged } from "./../shared/redux-store/authenticationSlice";
import Navbar from "../components/layouts/Navbar";
import IdleTimerCustom from "./../components/account/IdleTimerCustom";
import { useState } from "react";
import Footer from "../components/layouts/Footer";

const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const RoutesWithNavigation = () => {
  const isLogged = useSelector(selectIsLogged);

  return (

    <BrowserRouter>
      <div className="space-y-14">
        {isLogged && <IdleTimerCustom />}
        <Navbar />
        <Routes />
      </div>

      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
      <Footer />
    </BrowserRouter>
    
  );
};

export default RoutesWithNavigation;
