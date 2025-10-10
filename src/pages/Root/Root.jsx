import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="w-full mx-auto flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow bg-[#F1F5E8]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
