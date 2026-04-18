import React from "react";
import type { Blog } from "../type/Blog";

interface Props {
    blog: Blog
}

const BlogCard = React.memo(({blog}: Props) => {
    return (
        <div className="p-2 shadow-md shadow-gray-400 w-80 rounded-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="font-light text-slate-500">{blog.body}</p>
        </div>
    )
}) // memo mencegah komponen dirender ulang jika props tidak berubah
//gunakan memo jika sering melakukan render

export default BlogCard;