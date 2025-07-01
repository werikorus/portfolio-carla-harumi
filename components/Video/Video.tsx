interface VideoProps {
  source: string; 
}

export const Video = (videoProps: VideoProps) => {
  const { source } = videoProps;

  return (
    //<video
    //  autoPlay
    //  muted
    //  loop
    //  playsInline
    //  controls
    //  style={{ width: "100%", height: "100%" }}
    //  preload="none"
    //>
    //  <source src={source} type="video/mp4" />
    //  <track src={source} kind="subtitles" />
    //</video>

    <>
      <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1097721612?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;"
          frameBorder="0"
          //allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="story-cada-pesssoa-importa"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};

export default Video;