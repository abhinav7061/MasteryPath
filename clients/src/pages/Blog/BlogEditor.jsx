import React, { useState } from 'react'
import Editor from '../../Editor'
import Button from '../../components/Button'

const BlogEditor = ({ onSubmit, title, setTitle, summary, setSummary, setFiles, content, setContent, isUpdate = false }) => {

    const [preview, setPreview] = useState(false)

    return (
        <div className={`py-10`}>
            <form onSubmit={onSubmit}>
                <div className=' flex flex-col'>
                    <input
                        type="title"
                        placeholder={'Title'}
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}
                        className='py-1 px-3 mb-6 rounded-md outline-none'
                    />
                    <input
                        type="summary"
                        placeholder={'Summary'}
                        value={summary}
                        onChange={ev => setSummary(ev.target.value)}
                        className='py-1 px-3 mb-6 rounded-md outline-none'
                    />
                    <input
                        type="file"
                        onChange={ev => setFiles(ev.target.files)}
                        className='border mb-6 p-1'
                    />
                </div>
                <Editor onChange={setContent} value={content} />
                <Button type={'submit'} className={'px-3 py-1 mt-3'} title={isUpdate? 'Update Blog' : 'Create Blog'} />
                <Button type={'button'} className={'mx-4 px-3 py-1 mt-3'} title={`${preview ? 'Hide Preview' : 'Preview'}`} onclicks={() => { setPreview(pre => !pre) }} />
            </form>
            {preview && <div className="content mt-7 p-8 border border-sky-500 rounded-2xl" dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
    )
}

export default BlogEditor