import { Suspense } from "react";
interface VideoProps {
  source: string;
}

export const Video = (videoProps: VideoProps) => {
  const { source } = videoProps;

  return (
    <Suspense>
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        //style={{ width: "100%", height: "100%" }}
        className="w-auto h-auto rounded-lg"
        preload="none"
      >
        <source src={source} type="video/mp4" />
      </video>
    </Suspense>
  );
};

export default Video;
