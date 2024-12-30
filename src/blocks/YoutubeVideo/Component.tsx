import type { YoutubeBlock as YoutubeBlockProps } from '@/payload-types'

export const YoutubeBlock: React.FC<YoutubeBlockProps> = ({ className, videoUrl }) => {
  // Extract video ID from the URL and make sure it's a valid YouTube URL
  const videoIdMatch =
    videoUrl?.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/) ||
    videoUrl?.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]+)/)

  const videoId = videoIdMatch ? videoIdMatch[1] : undefined

  if (!videoId) {
    return <div>Invalid YouTube URL</div>
  }

  return (
    <div className={[className, 'youtube-embed'].filter(Boolean).join(' ')}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%' /* 16:9 aspect ratio (9/16 * 100) */,
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
