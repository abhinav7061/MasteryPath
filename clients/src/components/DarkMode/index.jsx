import React, { useState, useEffect } from 'react'
import { darkBtn } from '../../constants';

function DarkMode() {
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );

    const [icon, setIcon] = useState(() => {
        switch (theme) {
            case "dark": return "moon";
            case "light": return "sunny";
            default: return "desktop-outline";
        }
    });

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }
    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }
    }, [theme]);

    darkQuery.addEventListener('change', (event) => {
        if (!("theme" in localStorage)) {
            if (event.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }
    });
    return (
        <>
            <div className="cursor-pointer group inline-block relative">
                <div className="text-sky-600 h-7 md:h-8 w-7 md:w-8 border flex items-center justify-center border-sky-600 text-xl rounded-full text-center">
                    <ion-icon name={icon}></ion-icon>
                </div>
                <div className="absolute md:top-6 md:left-0 hidden group-hover:block z-[60] translate-x-[-30%] top-0 left-[54px]">
                    <div className="hidden md:block py-3 translate-x-[30%]">
                        <div
                            className="w-4 h-4 left-3 absolute mt-1 bg-white dark:bg-black rotate-45"
                        ></div>
                    </div>
                    <div className="bg-white/60 dark:bg-slate-950/90 backdrop-blur-sm md:bg-white md:dark:bg-black p-0 md:rounded-xl md:p-5 flex flex-row md:flex-col">
                        {darkBtn.map((elm, index) => (
                            <div
                                onClick={() => {
                                    setTheme(elm.text);
                                    setIcon(elm.icon);
                                }}
                                className={`${theme === elm.text ? 'text-sky-600' : 'text-black dark:text-white'} flex items-center gap-4 flex-row ${index !== darkBtn.length - 1 ? "md:mb-6" : "mb-0"}`}
                                key={index}
                            >
                                <div className={`${elm.icon === icon && 'hidden md:block'} md:h-auto md:w-auto h-7 w-7 border md:border-none border-sky-600 flex items-center justify-center rounded-full text-center ml-4 md:ml-0`}>
                                    <ion-icon name={elm.icon}></ion-icon>
                                </div>
                                <h1 className='hidden md:block text-lg'>{elm.text}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DarkMode