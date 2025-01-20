import React from "react";
import blogData from "../data/blog";


const posts = blogData.posts
const ArticleList =(posts) =>{
    return(
        <main>
            {posts.map((post) => (
            <article title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    );
}

export default ArticleList