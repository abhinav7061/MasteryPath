import React, { useEffect } from 'react'
import { useUserAuthentication } from '../../context/userContext';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import BlogItemSkeletonloading from './BlogItemSkeletonloading';
import useBlogSummaries from '../../hooks/useBlogSummaries';
import BlogSearchSort from './BlogSearchSort';

const apiUrl = import.meta.env.VITE_API_URL;

const Blog = () => {
  const { isAuthenticatedUser } = useUserAuthentication();
  const { blogs, hasMore, loading, loaderDiv, perPage, search, setSearch, sort, setSort, resetBlogSummaries } = useBlogSummaries(`${apiUrl}/blog`);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetBlogSummaries();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div>
      <div className='mb-5 h-16 flex justify-between items-center px-4 sticky top-20 z-[100] rounded-md bg-primary'>
        {isAuthenticatedUser && <Link to='/create_blog' className=''>
          <div className="h-10 rounded-xl font-bold bg-blue-gradient flex items-center px-4 text-sm">
            <ion-icon name="add-outline" className='font-bold'></ion-icon> Write Blog
          </div>
        </Link>}
        <BlogSearchSort
          className='w-1/2'
          search={search}
          setSearch={setSearch}
          onSubmit={handleSubmit}
        />
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
        {
          blogs.map(post => <BlogItem data={post} key={post._id} />)
        }
        {
          loading && Array.from({ length: perPage }).map((_, index) => <BlogItemSkeletonloading key={index} />)
        }
      </div>
      {!hasMore && <div className='w-full text-center dark:text-white font-bold text-3xl my-5'>You have reached to end</div>}
      <div ref={loaderDiv} />
    </div>
  )
}

export default Blog