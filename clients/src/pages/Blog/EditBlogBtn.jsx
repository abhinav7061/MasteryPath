import React, { useState, useEffect } from 'react'
import { color } from '../../style';
import { Link } from 'react-router-dom';
import { useUserAuthentication } from '../../context/userContext';

const apiUrl = import.meta.env.VITE_API_URL;

const EditBlogBtn = ({ blogId }) => {
    const { isAuthenticatedUser } = useUserAuthentication();
    const [isAuthor, setIsAuthor] = useState(false);
    const checkAuthor = async () => {
        try {
            const response = await fetch(`${apiUrl}/blog/isAuthor/${blogId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            const data = await response.json();
            if (response.ok && data.success) {
                setIsAuthor(true);
            } else {
                setIsAuthor(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthor(false);
        }
    }

    useEffect(() => {
        checkAuthor();
    }, [isAuthenticatedUser])

    return (
        <>
            {isAuthor && (
                <div className={`${color.textBlackWhite} md:text-sm text-[10px]`}>
                    <Link className="flex items-center gap-2" to={`/edit_blog/${blogId}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Edit this Blog
                    </Link>
                </div>
            )}
        </>
    )
}

export default EditBlogBtn