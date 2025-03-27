import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, signOut } from "aws-amplify/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuthenticated(true);
        //console.log(user);
        setUserEmail(user.signInDetails.loginId); // Fetch user email or username
      } catch (error) {
        setIsAuthenticated(false);
        setUserEmail("");
      }
    };

    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setIsAuthenticated(false);
    setUserEmail("");
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">SyntaxSaga</h1>
        </div>

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-lg font-semibold">{userEmail}</span>
                <button className="primary-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className="primary-btn" onClick={() => navigate("/auth")}>
                Login
              </button>
            )}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
