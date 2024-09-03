import React from 'react'

const BlogSearchSort = ({ className, search, setSearch, onSubmit }) => {
    return (
        <form className={`max-w-xl ${className}`} onSubmit={onSubmit}>
            <div className="flex">
                <div className="flex-shrink-0 z-10 inline-flex gap-2 items-center py-2.5 px-4 text-sm font-medium text-center text-slate-900 bg-slate-100 dark:bg-slate-700 border border-sky-300 rounded-s-lg  dark:hover:bg-slate-600 dark:text-white relative group" type="button">
                    <span className='cursor-pointer'>All categories</span>
                    <ion-icon name="chevron-down"></ion-icon>
                    <div className="z-10 absolute hidden group-hover:block top-10 left-0 p-3">
                        <ul className="py-2 text-sm text-slate-900 dark:text-slate-300 bg-black-gradient-2 rounded-md">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative w-full ">
                    <input
                        type="search"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-slate-100 dark:bg-slate-700 focus:bg-slate-50 rounded-e-lg border-y border-sky-300 dark:placeholder-slate-400 dark:text-white outline-none"
                        placeholder="Search Blogs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-bold h-full rounded-e-lg bg-blue-gradient text-black px-4">
                        Search
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BlogSearchSort