import React, { useState, useEffect, Suspense } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../style';
import { toast, Toaster } from 'sonner';
import { Outlet } from 'react-router-dom';
import { useUserAuthentication } from '../context/userContext';
const apiUrl = import.meta.env.VITE_API_URL;

const Layout = () => {
    const { isAuthenticatedUser, setIsAuthenticatedUser } = useUserAuthentication();
    const [loading, setLoading] = useState(true)
    const checkUserAuthentication = async () => {
        try {
            const res = await fetch(`${apiUrl}/user/isAuthenticatedUser`, {
                credentials: "include",
            });
            const data = await res.json();
            console.log({ data, "msg": data.message });
            if (data.success) {
                setIsAuthenticatedUser(data.isUserAuthenticated);
                return;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkUserAuthentication();
    }, [isAuthenticatedUser])

    return (
        <>
            {loading ? <div className='flex justify-center items-center text-5xl text-black dark:text-white h-[100vh]'>Loading...</div> : (<>
                <div className={`${styles.flexStart} overflow-x-hidden`}>
                    <div className={`${styles.boxWidth} ${styles.paddingX} relative`}>
                        <div className='relative w-full'>
                            <Navbar />
                            <Toaster position="top-right" richColors closeButton='true' />
                            <div className='my-4 md:my-8'>
                                <Suspense fallback={<div className='flex justify-center items-center text-5xl text-black dark:text-white h-[100vh]'>Loading...</div>}>
                                    <Outlet />
                                </Suspense>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </>)
            }
        </>
    )
}

export default Layout