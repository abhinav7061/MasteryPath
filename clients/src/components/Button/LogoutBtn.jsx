import React from 'react';
import Button from '.';
import { useUserAuthentication } from '../../context/userContext';
import { toast } from 'sonner';

const apiUrl = import.meta.env.VITE_API_URL;

const LogoutBtn = () => {
    const { setIsAuthenticatedUser } = useUserAuthentication();
    const logout = async () => {
        try {
            const res = await fetch(`${apiUrl}/user/logout`, {
                credentials: 'include',
            });
            if (res.ok) {
                setIsAuthenticatedUser(false);
                console.log({ res: res.ok, user: false });
                toast.success("Logged out successfully");
            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            toast.info("Error during logout")
            console.log("Error during logout:", error);
        }
    }
    return (
        <Button className='px-5 py-[3px] text-sm rounded-md md:rounded-[10px] md:py-[8px] md:text-[18px]' title={`Logout`} onclicks={logout} />
    )
}

export default LogoutBtn