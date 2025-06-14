import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configurar loop para os primeiros 3 segundos
    const handleTimeUpdate = () => {
      if (video.currentTime >= 3) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
    >
      <source src={src} type="video/mp4" />
      Seu navegador não suporta vídeos HTML5.
    </video>
  );
};
