import { Suspense  } from "react";
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoProps {
  videoId: string;
}

export const Video = (videoProps: VideoProps) => {
  const { videoId } = videoProps;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.mute();
    event.target.playVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      fs: 0,
      disablekb: 1,
      iv_load_policy: 3,
      playsinline: 1,
      loop: 1,
      playlist: videoId,
      showinfo: 0,
    },
  };

  return (
    <Suspense fallback={<span>Loading...</span>}>
      {/* <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        className='w-full h-full aspect-[9/16] rounded-lg overflow-hidden bg-slate-800'
      /> */}

      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full aspect-[9/16] rounded-lg overflow-hidden bg-slate-800"
        preload="none"
      >
        <source src={videoId} type="video/mp4" />
      </video>
    </Suspense>
  );
};

export default Video;
