// before Dangeriously set
// import { useContext, useEffect, useState } from "react";
// import 'react-quill/dist/quill.snow.css';
// import { useParams, Link } from "react-router-dom";
// import styles, { color } from '../../style';
// import { format } from "date-fns";
// import { CurrentUserContext } from '../../App';
// import { motion, useScroll } from "framer-motion";
// // import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing

// const BlogPage = () => {
//     const { scrollYProgress } = useScroll();
//     const [postInfo, setPostInfo] = useState({});
//     const { currentUser } = useContext(CurrentUserContext);
//     const { id } = useParams();

//     const getPost = async () => {
//         try {
//             const res = await fetch(`http://localhost:3000/post/${id}`);
//             const data = await res.json();
//             setPostInfo(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const addCopyButtonsToContent = (content) => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(content, 'text/html');
//         const snippets = doc.getElementsByClassName('ql-syntax');

//         for (let i = 0; i < snippets.length; i++) {
//             let code = snippets[i].textContent; // get the text content
//             let copyButton = document.createElement('button');
//             copyButton.className = 'hljs-copy px-4 py-1 rounded bg-black-gradient-2 dark:bg-black-gradient-2';
//             copyButton.innerText = 'Copy';
//             copyButton.addEventListener('click', function () {
//                 navigator.clipboard.writeText(code).then(() => {
//                     this.innerText = 'Copied!';
//                     setTimeout(() => {
//                         this.innerText = 'Copy';
//                     }, 1000);
//                 }).catch(err => {
//                     console.error('Failed to copy: ', err);
//                     this.innerText = 'Failed!';
//                     setTimeout(() => {
//                         this.innerText = 'Copy';
//                     }, 1000);
//                 });
//             });
//             snippets[i].insertBefore(copyButton, snippets[i].firstChild); // append copy button
//         }

//         return doc.body.innerHTML;
//     };

//     useEffect(() => {
//         getPost();
//     }, [id]);

//     if (!postInfo || Object.keys(postInfo).length === 0) {
//         return <div className='flex justify-center items-center text-5xl text-black dark:text-white'>Loading...</div>;
//     }

//     const title = postInfo.title;
//     const inputDate = new Date(postInfo.createdAt);
//     const formattedDate = format(inputDate, 'MMM dd, yyyy');
//     const author = postInfo.author.name;
//     let content = postInfo.content;
//     const cover = postInfo.cover;

//     // Modify content before setting it with dangerouslySetInnerHTML
//     content = addCopyButtonsToContent(content);

//     return (
//         <>
//             <motion.div
//                 className="progress-bar"
//                 style={{ scaleX: scrollYProgress }}
//             />
//             <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//                 <div className={`${styles.boxWidth} mt-10`}>
//                     <div className={`${styles.flexCenter} flex-col mb-5`}>
//                         <h1 className={`${color.textBlackWhite} ${styles.heading3}`}>{title}</h1>
//                         <div className="flex items-center gap-8 mt-2">
//                             <div className="flex flex-col items-center">
//                                 <time className={`font-poppins font-bold text-base md:text-xl ${color.textSlate}`}>{formattedDate}</time>
//                                 <div className={`${styles.smHeading} text-green-700`}>by @{author}</div>
//                             </div>
//                             {currentUser._id === postInfo.author._id && (
//                                 <div className={`${color.textBlackWhite} md:text-sm text-[10px]`}>
//                                     <Link className="flex items-center gap-2" to={`/edit_blog/${postInfo._id}`}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                                         </svg>
//                                         Edit this post
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                     <div className="mb-5">
//                         <img src={`http://localhost:3000/${cover}`} alt="" className="object-fill w-full rounded-2xl h-80" />
//                     </div>
//                     <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogPage;



// Before Dangeriously Set
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { useParams } from "react-router-dom";
import styles, { color } from '../../style';
import { format } from "date-fns";
import { motion, useScroll } from "framer-motion";
import EditBlogBtn from "./EditBlogBtn";

const apiUrl = import.meta.env.VITE_API_URL;

const BlogPage = () => {
    const getCopyBtn = () => {
        let snippets = document.getElementsByClassName('ql-syntax');

        let numberOfSnippets = snippets.length;
        for (let i = 0; i < numberOfSnippets; i++) {
            snippets[i].classList.add('hljs'); // append copy button to pre tag
            let copyButton = document.createElement('button');
            copyButton.className = 'hljs-copy px-4 py-1 font-bold text-slate-800 dark:text-slate-300 rounded bg-black-gradient-2 dark:bg-black-gradient-2';
            copyButton.innerText = 'Copy';
            copyButton.addEventListener('click', function () {
                let code = snippets[i].textContent; // get the text content
                code = code.replace(/^(Copy)+/, '');
                navigator.clipboard.writeText(code).then(() => {
                    this.innerText = 'Copied!';
                    setTimeout(() => {
                        this.innerText = 'Copy';
                    }, 1000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    this.innerText = 'Failed!';
                    setTimeout(() => {
                        this.innerText = 'Copy';
                    }, 1000);
                });
            });
            snippets[i].insertBefore(copyButton, snippets[i].firstChild); // append copy button
        }
    };

    const { scrollYProgress } = useScroll();
    const [postInfo, setPostInfo] = useState({});
    const { id } = useParams();

    const getPost = async () => {
        try {
            const res = await fetch(`${apiUrl}/blog/${id}`);
            const data = await res.json();
            if (data.success) {
                setPostInfo(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPost();
    }, [id]);

    useEffect(() => {
        if (Object.keys(postInfo).length !== 0) {
            getCopyBtn();
        }
    }, [postInfo]);

    if (!postInfo || Object.keys(postInfo).length === 0) {
        return <div className='flex justify-center items-center text-5xl text-black dark:text-white'>Loading...</div>;
    }

    const title = postInfo.title;
    const inputDate = new Date(postInfo.createdAt);
    const formattedDate = format(inputDate, 'MMM dd, yyyy');
    const author = postInfo.author.name;
    const content = postInfo.content;
    const cover = postInfo?.cover;

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className={`my-8 md:px-20`}>
                <div className={`${styles.flexCenter} flex-col mb-5`}>
                    <h1 className={`${color.textBlackWhite} ${styles.heading3}`}>{title}</h1>
                    <div className="flex items-center gap-8 mt-2">
                        <div className="flex flex-col items-center">
                            <time className={`font-poppins font-bold text-base md:text-xl ${color.textSlate}`}>{formattedDate}</time>
                            <div className={`${styles.smHeading} text-green-700`}>by @{author}</div>
                        </div>
                        <EditBlogBtn authorId={postInfo.author._id} blogId={id} />
                    </div>
                </div>
                {cover && <div className="mb-5">
                    <img src={`${apiUrl}/blog-cover/${cover}`} alt="" className="object-fill w-full rounded-2xl h-80" />
                </div>}
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </>
    );
};

export default BlogPage;
