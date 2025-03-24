import React, { lazy, Suspense } from "react"
const LazyYoutube = lazy(() => import("react-youtube"))

interface YoutubeProps{
    videoId : string
}

export const YoutubePlayer:React.FC<YoutubeProps> = ({ videoId }) =>{

    const opts = {
        height : "390",
        width : "660",
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0, 
            disablekb: 1,
            fs: 0,
          },
    }
    return(
        <div className="flex justify-center mt-15">
            <Suspense fallback = {<div className="text-primary">Loading video...</div>}>
                <LazyYoutube videoId = {videoId} opts = {opts}></LazyYoutube>
            </Suspense>
        </div>
    )
}