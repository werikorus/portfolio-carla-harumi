import { Suspense } from "react";
interface VideoProps {
  source: string;
}

export const Video = (videoProps: VideoProps) => {
  const { source } = videoProps;

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full aspect-[9/16] rounded-lg overflow-hidden bg-slate-800"
        preload="none"
      >
        <source src={source} type="video/mp4" />
      </video>
    </Suspense>
  );
};

export default Video;
