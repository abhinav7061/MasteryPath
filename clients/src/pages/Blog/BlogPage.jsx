import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { useParams } from "react-router-dom";
import styles, { color } from '../../style';
import { format } from "date-fns";
import { motion, useScroll } from "framer-motion";
import EditBlogBtn from "./EditBlogBtn";
import BlogPageSkeletonloading from "./BlogPageSkeletonloading";
import BlogContents from "../../components/BlogContents";
import Toc from "./Toc";

const apiUrl = import.meta.env.VITE_API_URL;

const BlogPage = () => {

    const { scrollYProgress } = useScroll();
    const [postInfo, setPostInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getPost = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${apiUrl}/blog/getBlog/${id}`);
            const data = await res.json();
            if (data.success) {
                setPostInfo(data.data);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getPost();
    }, [id]);

    if (loading) {
        return <div><BlogPageSkeletonloading /></div>;
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
            <div className={`my-8 flex w-full justify-center`}>
                <Toc content={content} />
                <div className="w-full md:w-3/4 mt-10">
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
                        <img src={`${apiUrl}/blog-cover/${cover}`} alt="" className="object-fill w-full rounded-2xl h-52 xs:h-80" />
                    </div>}
                    {/* <div className="content" dangerouslySetInnerHTML={{ __html: content }} /> */}
                    <BlogContents content={content} />
                </div>
            </div>
        </>
    );
};

export default BlogPage;
