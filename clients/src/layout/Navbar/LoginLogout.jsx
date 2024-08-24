import React, { useContext } from 'react'
import LoginBtn from "../../components/Button/LoginBtn";
import SignupBtn from "../../components/Button/SignupBtn";
import LogoutBtn from '../../components/Button/LogoutBtn';
import { useUserAuthentication } from '../../context/userContext';

function LoginLogout() {
    const { isAuthenticatedUser } = useUserAuthentication();
    return (<>
        {isAuthenticatedUser ? <LogoutBtn /> : (<>
            <LoginBtn />
            <SignupBtn />
        </>)
        }
    </>
    )
}

export default LoginLogout