import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact Text Transition',
          value: 'TextTransition',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'textTransitionDelay',
      type: 'select',
      label: 'Transition Delay',
      admin: {
        condition: (_, { type } = {}) => type === 'TextTransition', // Only show when type is TextTransition
        description: 'If time is not set, it will default to 3 seconds',
      },
      defaultValue: '3000', // Default to 3000ms (3 seconds)
      options: [
        { label: '1 second', value: '1000' },
        { label: '2 seconds', value: '2000' },
        { label: '3 seconds', value: '3000' },
        { label: '4 seconds', value: '4000' },
        { label: '5 seconds', value: '5000' },
        { label: '6 seconds', value: '6000' },
        { label: '7 seconds', value: '7000' },
        { label: '8 seconds', value: '8000' },
        { label: '9 seconds', value: '9000' },
        { label: '10 seconds', value: '10000' },
      ],
    },
    {
      name: 'textTransitionItems',
      type: 'array',
      label: 'Text Transition Items',
      admin: {
        condition: (_, { type } = {}) => type === 'TextTransition', // Only show when type is TextTransition
      },
      fields: [
        {
          name: 'richText',
          type: 'richText',
          label: false,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) =>
          ['highImpact', 'mediumImpact', 'TextTransition'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
