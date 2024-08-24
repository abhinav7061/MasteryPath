import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import BlogEditor from './BlogEditor';

const apiUrl = import.meta.env.VITE_API_URL;

export default function CreateBlog() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        ev.preventDefault();
        if (content == '') {
            toast.error('Please write the blog content in the editor');
            return;
        }
        try {
            const data = new FormData();
            data.set('title', title);
            data.set('summary', summary);
            data.set('content', content);
            data.set('file', files[0]);
            ev.preventDefault();
            const response = await fetch(`${apiUrl}/blog/createBlog`, {
                method: 'POST',
                body: data,
                credentials: 'include'
            });
            const responseData = await response.json();
            if (response.ok && responseData.success) {
                toast.success("Blog created!");
                setTitle("");
                setSummary('');
                setContent('')
                setFiles(null);
                setRedirect(true);
            } else {
                throw responseData.message;
            }
        } catch (error) {
            toast.error("Error while creating blog!");
            console.log("Error while creating blog:- ", error);
        }
    }

    if (redirect) {
        navigate('/blog');
        return;
    }
    return (
        <>
            <BlogEditor
                onSubmit={createNewPost}
                title={title}
                setTitle={setTitle}
                summary={summary}
                setSummary={setSummary}
                content={content}
                setContent={setContent}
                setFiles={setFiles}
            />
        </>
    );
}

