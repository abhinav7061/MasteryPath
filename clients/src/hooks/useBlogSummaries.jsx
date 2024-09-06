import { useState, useEffect, useRef, useCallback } from 'react';
import { toast } from 'sonner';

// Custom hook for managing poll-related data
const useBlogSummaries = (apiEndpoint) => {
    // Constants and state variables for managing poll data
    const perPage = 4;
    const loaderDiv = useRef(null);
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('newer');
    const [searchPlaceholder, setSearchPlaceholder] = useState(null);

    const fetchMoreBlogs = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiEndpoint}/allBlogSummaries?page=${page}&limit=${perPage}&search=${encodeURIComponent(search)}&sort=${encodeURIComponent(sort)}`);
            const data = await response.json();
            if (data.success) {
                setBlogs(prevBlogs => [...new Set([...prevBlogs, ...data.blogsSummary])]);
                if (data.blogsSummary.length < perPage) setHasMore(false);
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [page]);

    // Fetch more BlogsSummary when the page or search criteria changes
    useEffect(() => {
        if (hasMore) fetchMoreBlogs();
    }, [fetchMoreBlogs, hasMore]);

    // Set up the Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        }, {
            threshold: 1.0
        });

        if (loaderDiv.current) {
            observer.observe(loaderDiv.current);
        }

        return () => {
            if (loaderDiv.current) {
                observer.unobserve(loaderDiv.current);
            }
        };
    }, []);

    // Function to reset poll-related state variables and fetch new BlogsSummary
    const resetBlogSummaries = () => {
        setSearchPlaceholder(search);
        setSearch('');
        setBlogs([]);
        setHasMore(true);
        setLoading(true);

        // If already on the first page, fetch new BlogsSummary; otherwise, reset the page to 1
        if (page === 1) {
            fetchMoreBlogs();
        } else {
            setPage(1);
        }
    };

    // Return the state variables and functions for external usage
    return { blogs, loading, hasMore, search, sort, loaderDiv, perPage, setSearch, setSort, resetBlogSummaries, searchPlaceholder };
};

// Export the custom hook for use in other components
export default useBlogSummaries;