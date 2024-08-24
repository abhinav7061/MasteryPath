import React from 'react';
import Button from '.';
import { Link } from "react-router-dom";

const SignupBtn = () => {
    return (
        <Link to='/register'>
            <Button type='button' className={`px-5 py-[3px] text-sm rounded-md md:rounded-[10px] md:py-[8px] md:text-[18px]`} title={`Register`} />
        </Link>
    )
}

export default SignupBtn