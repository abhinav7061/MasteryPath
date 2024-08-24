import { useState } from "react";
import { close, logo, menu } from "../../assets";
import NavLinks from "./NavLinks";
import DarkMode from "../../components/DarkMode";
import LoginLogout from "./LoginLogout";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full flex justify-between items-center navbar h-20
        ">
            <div className="md:w-auto w-full flex justify-between">
                <img src={logo} alt="prabhi Cmmunity" className="w-[124px] h-[32px] object-fill" />
                <div className="text-3xl md:hidden" onClick={() => setOpen((open) => !open)}>
                    <img src={open ? close : menu} alt="menu" className="" />
                </div>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-2 font-Poppins">
                <NavLinks />
            </ul>
            <div className="hidden md:flex gap-3 items-center flex-row">
                <DarkMode />
                <LoginLogout />
            </div>
            {/* Mobile nav */}
            <div className={`flex flex-col md:hidden bg-white dark:bg-slate-950 z-[100] text-white fixed w-[270px] h-screen  top-0 bottom-0 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <div className="p-4 flex-grow overflow-y-auto">
                    <img src={logo} alt="prabhi Cmmunity" className="w-[124px] h-[32px] object-fill" />
                    <NavLinks />
                </div>
                <div className="py-3 flex items-center gap-3 hover:backdrop-blur-md px-4">
                    <DarkMode />
                    <div className="flex gap-3"><LoginLogout /></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
