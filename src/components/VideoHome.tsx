import { useRef, useEffect } from "react";

export default function VideoHome(){

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        (videoEl.current as HTMLVideoElement).play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return(
        <div>
            <video
                playsInline
                loop
                muted
                preload="metadata"
                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/video_home.mp4"
                // src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/video_home.mov"
                ref={videoEl}
                className="flex object-cover w-full shadow-2xl shadow-green-50 lg:h-96 h-60 opacity-70"
            />
        </div>
    )


}