import React, { useEffect, useState } from 'react'
import { useUserAuthentication } from '../../context/userContext';
import { Link } from 'react-router-dom';
import styles from "../../style";
import { useNavigate } from "react-router-dom";
import BlogItem from './BlogItem';

const apiUrl = import.meta.env.VITE_API_URL;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { isAuthenticatedUser, setIsAuthenticatedUser } = useUserAuthentication();
  const getBlogs = async () => {
    try {
      const response = await fetch(`${apiUrl}/blog/allBlogs`);
      const data = await response.json();
      console.log("response:- ", data);
      setPosts(data)
    } catch (error) {
      console.log(error);
    }
    // fetch('getpost').then(response => console.log(response))
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className={`${styles.boxWidth} relative`}>
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            posts.map(post => <BlogItem data={post} key={post._id} />)
          }
        </div>
        {isAuthenticatedUser && <Link to='/create_blog' className='fixed bottom-10 right-10'> <div className="text-sky-600 h-10 w-10 border border-sky-600 text-3xl rounded-full font-extrabold flex justify-center items-center bg-blue-gradient"><ion-icon name="add-outline" className='font-bold'></ion-icon></div></Link>}
      </div>
    </>
  )
}

export default Blog