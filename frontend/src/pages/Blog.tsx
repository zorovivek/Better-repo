import { FullBlog } from "../components/FullBlog"
import { SingleBlogSkeleton } from "../components/SingleBlogSkeleton"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

export const Blog = () => {
    const { id }  = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    })
    if(loading) {
        return <div>
            <SingleBlogSkeleton />
        </div>
    } 
    return <div>
        <FullBlog blog={blog!}/> 
    </div>
}
