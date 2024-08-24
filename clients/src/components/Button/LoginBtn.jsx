import React from 'react';
import Button from '.';
import { NavLink } from "react-router-dom";

const LoginBtn = () => {
    return (
        <NavLink to='/login'>
            <Button type='button' className={`px-5 py-[3px] text-sm rounded-md md:rounded-[10px] md:py-[8px] md:text-[18px]`} title={`Login`} />
        </NavLink>
    )
}

export default LoginBtn