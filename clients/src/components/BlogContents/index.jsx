import react, { useEffect } from "react";

const BlogContents = ({ content, className }) => {
    const addStylesCopyBtn = () => {
        let snippets = document.getElementsByClassName('ql-syntax');
        let numberOfSnippets = snippets.length;

        for (let i = 0; i < numberOfSnippets; i++) {
            snippets[i].classList.add("hljs", "dark:bg-black", "bg-slate-900", "border", "border-t-0", "border-gray-50", "dark:border-gray-700");

            // Create the container div for the button
            let div = document.createElement('div');
            div.className = 'relative bg-slate-700 dark:bg-gray-900 z-10 flex justify-end items-center rounded-t-lg overflow-hidden px-4 py-1 border border-b-0 border-gray-50 dark:border-gray-700 mt-4';

            // Create the copy button
            let copyButton = document.createElement('button');
            copyButton.className = 'px-4 py-1 text-sm font-bold text-slate-50 rounded bg-black-gradient cursor-pointer';
            copyButton.innerText = 'Copy';

            // Add the click event listener for the copy functionality
            copyButton.addEventListener('click', function () {
                let code = snippets[i].textContent; // get the text content
                code = code.replace(/^(Copy)+/, ''); // remove 'Copy' if it's part of the text
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

            // Append the button to the div
            div.appendChild(copyButton);

            // Insert the div before the pre tag
            snippets[i].parentNode.insertBefore(div, snippets[i]);
        }
    };

    useEffect(() => {
        addStylesCopyBtn();
    }, []);

    return (
        <div className={`content ${className}`} dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default BlogContents