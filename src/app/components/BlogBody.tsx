// components/BlogBody.tsx
import styles from './blogBody.module.css';
import YouTubeEmbed from './YoutubeEmbed';

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const BlogBody = ({ body }: { body: string | string[] }) => {
  const renderContent = (content: string, index: number) => {
    const videoId = getYouTubeId(content);
    if (videoId) return <YouTubeEmbed key={index} url={videoId} />;
    
    return (
      <p key={index} className={styles.paragraph}>
        {content}
      </p>
    );
  };

  if (Array.isArray(body)) {
    return <div className={styles.bodyContent}>{body.map(renderContent)}</div>;
  }

  return renderContent(body, 0);
};

export default BlogBody;