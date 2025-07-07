import { Appbar } from "./Appbar";

export const SingleBlogSkeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center animate-pulse">
        <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
          {/* Main content skeleton */}
          <div className="col-span-8 space-y-4">
            <div className="h-12 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-11/12"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>

          {/* Author sidebar skeleton */}
          <div className="col-span-4 space-y-4 pl-8">
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="flex items-center mt-2">
              <div className="w-12 h-12 bg-slate-300 rounded-full mr-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded w-32"></div>
                <div className="h-3 bg-slate-200 rounded w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
