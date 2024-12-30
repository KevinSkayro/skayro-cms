import type { Block } from 'payload'

export const YoutubeVideo: Block = {
  slug: 'youtube',
  interfaceName: 'YoutubeBlock',
  fields: [
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
      label: 'YouTube Video URL',
    },
  ],
}
