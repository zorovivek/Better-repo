import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div className="flex justify-center">
            <div className="w-full max-w-3xl px-4">
                <div role="status" className=" animate-pulse">
                <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
                    <div className="flex">
                        <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>            
                        <div className="font-extralight pl-2 text-sm flex justify-center flex-col"> 
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="flex justify-center flex-col pl-2  -center "> <Circle /> </div>
                        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col"> 
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold pt-2">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-md font-thin">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-slate-500 text-sm font-thin">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}