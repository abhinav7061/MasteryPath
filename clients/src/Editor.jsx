import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange }) {

    const modules = {
        // placeholder: 'Compose an epic...',
        syntax: true,
        toolbar: [
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'code'],
            [{ 'color': [] }, { 'background': [] }],

            [{ 'script': 'sub' }, { 'script': 'super' }],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            [{ 'align': [] }],
            ['clean'],
        ],
    };
    return (
        <div className="content">
            <ReactQuill
                placeholder={'Compose an epic...'}
                value={value}
                theme={'snow'}
                onChange={onChange}
                modules={modules}
                style={{
                    backgroundColor: 'rgb(199, 195, 195)',
                    color: 'black',
                }}
                require
            />
        </div>
    );
}
