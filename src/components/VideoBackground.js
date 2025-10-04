import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function VideoBackground() {
    const location = useLocation();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Force reload and play the video
            videoRef.current.load();
            videoRef.current.play().catch(e => {
                console.log('Autoplay prevented, trying again:', e);
                // Retry after a short delay
                setTimeout(() => {
                    if (videoRef.current) videoRef.current.play();
                }, 300);
            });
        }
    }, [location.key]); // Reload on route change (including refresh)

    return (
        <video
            ref={videoRef}
            key={`video-${location.key}`}
            className="background-video"
            playsInline
            disablePictureInPicture
            autoPlay
            loop
            muted
        >
            {/* Desktop version (default) */}
            <source
                src="/videos/sky-bg-short-compressed.mp4"
                type="video/mp4"
                media="(min-width: 769px)"
            />
            {/* Mobile version */}
            <source
                src="/videos/sky-bg-short-compressed-mobile.mp4"
                type="video/mp4"
                media="(max-width: 768px)"
            />
        </video>
    );
}

export default VideoBackground;
