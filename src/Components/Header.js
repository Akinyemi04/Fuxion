import React from "react";
import "../Stylings/Header.css";
import logo1 from "../images/Fuxion Profile Photo 1.png";
import s_logo from "../images/FUXION.svg";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <header>
      <aside>
        <img src={logo1} alt="" />
        <img src={s_logo} alt="" />
      </aside>
      <nav>
        <NavLink>About us</NavLink>
        <div>
          <p>
            <span>Products</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
        </div>
        <div>
          <p>
            <span>Services</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
        </div>
        <NavLink>Staking</NavLink>
        <NavLink>Roadmap</NavLink>
        <NavLink>Contact us</NavLink>
        <NavLink id="FUXE">Get $FUXE</NavLink>
      </nav>
    </header>
  );
};

export default Header;
