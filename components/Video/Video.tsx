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
    </video>

    //PARA URL EXTERNA
    //<>
    //  <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
    //    <iframe
    //      src="https://iframe.mediadelivery.net/play/461845/aeb1c340-d463-42cb-a3f3-370ad778b006"
    //      frameBorder="0"
    //      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    //      style={{
    //        position: "absolute",
    //        top: 0,
    //        left: 0,
    //        width: "100%",
    //        height: "100%",
    //      }}
    //      title="story-cada-pesssoa-importa"
    //    ></iframe>
    //  </div>
    //</>
  );
};

export default Video;