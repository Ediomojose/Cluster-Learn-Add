import React from "react";
import JoinButton from "../JoinButton/JoinButton";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const HeaderNav = () => {
  return (
    <>
      <header className="flex flex-row items-center justify-between p-5 bg-white">
        <div className="text-natural-black text-xl font-bold">
          CLUSTER <span className="text-natural-orange">LEARN</span>
        </div>
        <nav>
            <ul className="flex flex-row items-center gap-4">
                <li><a href="http://">ABOUT US</a></li>
                <li><a href="http://">TESTIMONIAL</a></li>
                <li><a href="http://">CONTACT</a></li>
            </ul>
        </nav>
        <JoinButton/>
      </header>
    </>
  );
};

export default HeaderNav;
