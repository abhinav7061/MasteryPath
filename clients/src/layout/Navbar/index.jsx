import { useState } from "react";
import { close, logo, menu } from "../../assets";
import NavLinks from "./NavLinks";
import DarkMode from "../../components/DarkMode";
import LoginLogout from "./LoginLogout";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    return (
        <>
            <header className="w-full flex justify-between items-center navbar h-16 rounded-xl sticky top-2 z-[500] backdrop-blur-md px-2 bg-slate-300/30 dark:bg-primary/30">
                <div className="md:w-auto w-full flex justify-between items-center">
                    <img src={logo} alt="Mastery path" className="w-[124px] object-contain" />
                    <div className="text-3xl md:hidden cursor-pointer z[1001]" onClick={() => setOpen((open) => !open)}>
                        <img src={open ? close : menu} alt="menu" className="" />
                    </div>
                </div>
                <nav className="md:flex hidden uppercase items-center gap-2 font-Poppins">
                    <NavLinks />
                </nav>
                <div className="hidden md:flex gap-3 items-center flex-row">
                    <DarkMode />
                    <LoginLogout />
                </div>
            </header>
            {/* Mobile nav */}
            <div
                className={`flex flex-col md:hidden overflow-x-hidden bg-white dark:bg-slate-950 z-[500] text-white fixed h-screen  top-0 bottom-0 left-0 duration-500 ${open ? "w-[200px]" : "w-0"}`}
                aria-expanded={open}
                aria-controls="nav"
                onKeyDown={handleKeyDown}
            >
                <nav className="p-4 flex-grow overflow-y-auto">
                    <img src={logo} alt="Mastery Path" className="h-14 object-contin" />
                    <NavLinks />
                </nav>
                <div className="py-3 flex  items-center justify-between hover:backdrop-blur-md px-4">
                    <DarkMode />
                    <div className="flex flex-col items-center gap-3"><LoginLogout /></div>
                </div>
            </div>
            {open && <div className="md:hidden top-0 right-0 fixed w-screen h-screen bg-black/50 z-[499]" onClick={() => setOpen(false)}></div>}

        </>);
};

export default Navbar;
