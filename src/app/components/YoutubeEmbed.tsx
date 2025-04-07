'use client';
import styles from "../components/content.module.css";
import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
    url: string;
  }
  
  export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
    const [showVideo, setShowVideo] = useState(true);
    const videoId = getYouTubeId(url);
    console.log("videoId", videoId);
    console.log("url", url);
    if (!videoId) return null;
  
    return (
      <div className={styles.videoContainer}>
        {showVideo ? (
          <iframe
            width="50%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className={styles.thumbnail} onClick={() => setShowVideo(true)} style={{ position: 'relative', width: '600px', height: '400px' }}>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video thumbnail"
              fill
              className={styles.thumbnailImage}
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {/* <button className={styles.playButton}>▶</button> */}
          </div>
        )}
      </div>
    );
  }
  
  // Helper function to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  export default YouTubeEmbed;

  