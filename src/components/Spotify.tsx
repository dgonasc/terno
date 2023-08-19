import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
[key: string]: any

link: string
wide?: boolean
width?: number | string
height?: number | string
frameBorder?: number | string
allow?: string
}

export const Spotify = ({
    link,
    style = {},
    wide = false,
    width = wide ? "100%" : 600,
    height = wide ? 80 : 380,
    frameBorder = 0,
    allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
    ...props
} : SpotifyProps) => {
    const url = new URL(link);
    // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
    return (
        <iframe
            title="Terno do Binga"
            src="https://open.spotify.com/embed/playlist/2zGY63Qd2wIlYDsv6Cz6kK?utm_source=generator"
            // src={`https://open.spotify.com/embed${url.pathname}`}
            width={width}
            height={height}
            allow={allow}
            style={{
                borderRadius: 14,
                ...style
            }}
            loading="lazy"
            {...props}
        />
    );
};

