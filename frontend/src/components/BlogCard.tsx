
import { Link } from "react-router-dom"
interface BlogcardsProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogcardsProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} size="small"/>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col"> {authorName} </div>
                <div className="flex justify-center flex-col pl-2  -center "> <Circle /> </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col"> {publishedDate} </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin">
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
        </div>
    </Link>
}

export function Circle () {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

type AvatarProps = {
  name: string;
  size: 'small' | 'medium' | 'large';
};

const sizeMap = {
  small: 'w-6 h-6 text-xs',
  medium: 'w-10 h-10 text-sm',
  large: 'w-14 h-14 text-md',
};

export function Avatar({ name, size }: AvatarProps) {
  const sizeClasses = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClasses} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="text-gray-600 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
