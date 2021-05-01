import React from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import "./MarkDownWrap.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({markdownText}) => {
    return (
        <ReactMarkdown className="markdown" rehypePlugins={[gfm]} children={markdownText}/>
    )
}