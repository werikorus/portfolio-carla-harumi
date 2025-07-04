interface VideoProps {
  source: string;
}

export const Video = (videoProps: VideoProps) => {
  const { source } = videoProps;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      //style={{ width: "100%", height: "100%" }}
      className="w-auto h-auto"
      preload="none"
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;
