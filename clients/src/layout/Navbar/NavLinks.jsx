import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../constants";

const NavLinks = ({ linkClicked }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="overflow-x-hidden">
          <div className="px-3 text-left md:cursor-pointer group">
            <NavLink to={link.linkTo}
              className={({ isActive }) => {
                return `py-2 flex gap-4 md:gap-1 items-center font-medium md:pr-0 group ${isActive ? 'text-sky-500' : 'text-black dark:text-white hover:text-sky-400 dark:hover:text-sky-300'}`;
              }}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link.submenu && <span className={`md:mt-1 md:ml-2 md:group-hover:rotate-180 md:group-hover:-mt-1 ${heading === link.name ? "rotate-180 md:rotate-0 -mt-3 md:-mt-0" : ""}`}>
                <ion-icon name="chevron-down"></ion-icon>
              </span>}
            </NavLink>
            {link.submenu && (
              <div>
                <div className="absolute top-10 hidden group-hover:md:block hover:md:block translate-x-[-40%] z-[60]">
                  <div className="py-3 translate-x-[45%] z-[49]">
                    <div
                      className="w-4 h-4 left-3 absolute -mt-1 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-gray-400 dark:border-b-gray-700"
                    ></div>
                  </div>
                  <div className="bg-black-gradient-2 p-5 grid grid-cols-3 gap-10 rounded-xl  max-h-[475px] overflow-auto">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.id}>
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-300  hover:text-sky-400 dark:hover:text-sky-300">
                          {mysublinks.Head}
                        </div>
                        {mysublinks.sublink.map((slink) => (
                          <div className="text-sm dark:text-gray-400 my-2.5" key={slink.id}>
                            <NavLink
                              to={slink.link}
                              className={({ isActive }) => {
                                const font_color = isActive ? 'text-sky-500' : 'hover:text-primary dark:hover:text-white';
                                return font_color;
                              }}
                            >
                              {slink.name}
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {link.submenu && <div
            className={`${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <div
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-1 pl-7 text-sm font-medium md:pr-0 flex gap-4 items-center  text-slate-600 dark:text-slate-200 cursor-pointer hover:text-sky-300 dark:hover:text-sky-300"
                  >
                    {slinks.Head}
                    <span className="md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                          ? "chevron-up"
                          : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </div>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <div className="py-1 pl-12 hover:text-slate-900 hover:dark:text-slate-500 cursor-pointer" key={slink.id}>
                        <NavLink to={slink.link}
                          className={({ isActive }) => {
                            const font_color = isActive ? 'text-sky-500' : 'text-slate-600 dark:text-slate-200 hover:text-sky-300 dark:hover:text-sky-300 text-xs';
                            return font_color;
                          }}
                        ><span className="mr-2">-</span>{slink.name}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
