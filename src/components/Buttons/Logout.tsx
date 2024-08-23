import React from "react";
import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

type LogoutProps = {};

const Logout: React.FC<LogoutProps> = () => {
  const [signOut] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
    toast.success("Logged Out", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };
  return (
    <div className="cursor-pointer group relative">
      <button
        className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
        onClick={handleLogout}
      >
        <FiLogOut />
        <div
          className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out
                                whitespace-nowrap
                                "
        >
          <p className="text-sm">Log Out</p>
        </div>
      </button>
    </div>
  );
};
export default Logout;
