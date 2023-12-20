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
        <div className="flex w-full">
            <video
                playsInline
                loop
                muted
                preload="metadata"
                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Video_Home_Binga.mp4"
                ref={videoEl}
                className="flex items-start object-cover w-full mx-1 rounded-lg h-28 lg:h-96 opacity-80"
                title="Terno do Binga"
            />
        </div>
    )
}
