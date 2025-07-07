import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"
export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if(loading) return <div>
        <Appbar />
        <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
    </div>
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="w-full max-w-3xl px-4">
                {blogs.map(blog => <BlogCard
                        id={blog.id} 
                        authorName={blog.author.name || "Anyonomous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={`7th July 2025`}
                    />
                )}
            </div>
        </div>
    </div>
}

