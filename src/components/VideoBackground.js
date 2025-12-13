import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function VideoBackground() {
    const location = useLocation();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Force reload and play the video
            videoRef.current.load();
            videoRef.current.play().catch(() => {
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
            onTimeUpdate={(e) => {
                const vid = e.target;
                if (vid.duration - vid.currentTime < 2.5) {
                    vid.currentTime = 0; // restart early
                }
            }}
        >
            {/* Sky background */}
            <source
                src="https://cdn.pixabay.com/video/2024/03/13/204006-923133925_small.mp4"
                type="video/mp4"
            />
        </video>
    );
}

export default VideoBackground;
