import React, { useEffect, useState } from 'react'

const Toc = ({ content, className }) => {
    const [toc, setToc] = useState([])
    const [showTOC, setShowTOC] = useState(false);
    const getTOC = () => {
        const toc = []
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        let baseLevel = 7; // No heading level is 7; this will be reset by the first heading

        doc.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
            const level = parseInt(heading.tagName.substring(1));
            const text = heading.textContent.trim();
            const id = heading.id;

            // Determine the base level (e.g., if the first heading is h3, baseLevel will be 3)
            if (level < baseLevel) {
                baseLevel = level;
            }

            toc.push({ level, text, id, baseLevel });
        });

        setToc(toc);
    }
    useEffect(() => {
        getTOC();
    }, [])

    return (
        <>
            {(toc.length > 1) && <div className={`sticky top-20 md:mr-6 h-[80vh] z-[100] ${className}`}>
                <div className={`flex items-center h-full dark:text-slate-100 absolute ${showTOC ? '-left-6 sm:-left-14' : '-left-6 sm:-left-16 md:-left-8'} md:relative`}>
                    <div className={`${showTOC ? 'w-64 border-r px-5' : ''} transition-all duration-300 w-0 md:border-r md:pr-5 py-5 md:w-full overflow-x-hidden overflow-y-auto h-full backdrop-blur-xl `}>
                        <h1 className='text-2xl underline mb-4'>Table of Contents</h1>
                        <ul className='space-y-1'>
                            {toc.map((item, index) => {
                                const indentLevel = item.level - item.baseLevel;
                                return (
                                    <li
                                        key={index}
                                        className={`ml-${indentLevel * 4} flex hover:text-sky-300 transition-all duration-300`}
                                        style={{ marginLeft: `${indentLevel * 1.5}rem` }}
                                    >
                                        <strong className='mr-2'> -</strong> <a href={`#${item.id}`} className='text-sm hover:underline'>{item.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <button className='px-1 py-2 md:hidden bg-slate-600 rounded-r-md' onClick={() => setShowTOC(prev => !prev)}><div className=''>{'>'}</div></button>
                </div>
            </div>}
        </>
    )
}

export default Toc