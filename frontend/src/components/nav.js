import { Link } from "react-router-dom";
import "../styles/nav.css";
import { Sidebar } from "./sidebar";
import { useState, useEffect } from "react";

const LogoWeb = "/logo1.png";

const MainNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser?.username) {
      setCurrentUser(savedUser.username);
    }
  }, []);

  return (
    <>
      <nav id="main-nav">
        <p id="logo">
          <img
            className="logoweb"
            src={LogoWeb}
            alt="Intro tho"
            onClick={() => setShowSidebar(true)}
            style={{ cursor: "pointer" }}
          />
        </p>


        <p className="nav-hover">
          {currentUser ? (
            <span style={{ color: "#095a5d" }}>Hi, {currentUser}</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </p>

        <p className="nav-hover"><Link to="/shop">Shop</Link></p>
        <Link to="/create-wallet" id="create-wallet">Connect Wallet</Link>
      </nav>

      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
    </>
  );
};

export { MainNav };
