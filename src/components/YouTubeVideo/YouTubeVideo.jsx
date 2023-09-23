import styles from "./youTubeVideo.module.scss";

function YouTubeVideo({ videoLink }) {
  const getYTEmbedLink = (link) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  return (
    <div className={styles.video}>
      <h2>youtube video</h2>
      <div>
        <iframe
          src={getYTEmbedLink(videoLink)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default YouTubeVideo;
