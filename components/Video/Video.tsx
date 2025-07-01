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
      style={{ width: "100%", height: "100%" }}
      preload="none"
    >
      <source src={source} type="video/mp4" />
      <track src={source} kind="subtitles" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;