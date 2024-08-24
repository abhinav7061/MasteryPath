import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import BlogEditor from "./BlogEditor";

const apiUrl = import.meta.env.VITE_API_URL;

export default function EditBlog() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    const getBlog = async (id) => {
        try {
            const res = await fetch(`${apiUrl}/blog/${id}`);
            const data = await res.json();
            if (res.ok && data.success) {
                setTitle(data.data.title);
                setContent(data.data.content);
                setSummary(data.data.summary);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlog(id);
    }, [id]);

    async function updateBlog(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        try {
            const response = await fetch(`${apiUrl}/blog/editBlog/${id}`, {
                method: 'PUT',
                body: data,
                credentials: 'include',
            });
            const responseData = await response.json();
            console.log({ responseData });
            if (response.ok && responseData.success) {
                toast.success("Blog Updated!");
                navigate(`/blog/${id}`);
            }
            else {
                throw new Error(responseData.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <BlogEditor
            onSubmit={updateBlog}
            title={title}
            setTitle={setTitle}
            summary={summary}
            setSummary={setSummary}
            content={content}
            setContent={setContent}
            setFiles={setFiles}
            isUpdate={true}
        />
    );
}