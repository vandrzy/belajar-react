import { useState } from "react"
import { blogSchema, type Blog } from "../types/Blog"


const BlogForm = () => {
    const [blog, setBlog] = useState<Blog>({title: "", description: ""});
    const [errors, setErrors] = useState<Partial<Blog>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlog(prev => ({...prev, [e.target.name]: e.target.value,}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = blogSchema.safeParse(blog);

        if (!result.success) {
            const fieldErrors: Partial<Blog>= {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof Blog;
                fieldErrors[field] = err.message
            })
            setErrors(fieldErrors);
            return;
        }
        console.log("data valid", result.data);
        setErrors({});

    }

    return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="title" 
          className="border-b-2"
          />
        {errors.title && <p>{errors.title}</p>}
      </div>

      <div>
        <input
          name="description"
          value={blog.description}
          onChange={handleChange}
          placeholder="description"
          className="border-b-2"
          />
        {errors.description && <p>{errors.description}</p>}
      </div>

      <button className="border-b-2" type="submit">Submit</button>
          
    </form>
  );

}

export default BlogForm