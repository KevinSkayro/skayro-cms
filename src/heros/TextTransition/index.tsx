'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import { styles } from './index.styles'

export const TextTransitionHero: React.FC<Page['hero']> = ({
  links,
  media,
  textTransitionDelay,
  textTransitionItems,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Convert the textTransitionDelay to a number if not null
  const IntTextTransitionDelay = textTransitionDelay ? parseInt(textTransitionDelay) : null

  useEffect(() => {
    setHeaderTheme('dark')

    // Cycle through textTransitionItems every `textTransitionDelay` or 3 seconds
    const interval = setInterval(() => {
      setIsAnimating(true) // Trigger animation
      setTimeout(() => setIsAnimating(false), 750) // Reset animation state after 750ms
      setCurrentIndex((prevIndex) =>
        textTransitionItems && textTransitionItems.length > 0
          ? (prevIndex + 1) % textTransitionItems.length
          : 0,
      )
    }, IntTextTransitionDelay || 3000)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval)
  }, [setHeaderTheme, textTransitionItems, IntTextTransitionDelay])

  return (
    <div className={styles.mainWrapper} data-theme="dark">
      <div className={styles.textOuterWrapper}>
        <div className={styles.textInnerWrapper}>
          {/* Render the currently transitioning text */}
          {textTransitionItems && textTransitionItems[currentIndex]?.richText && (
            <RichText
              className={styles.transitionText(isAnimating)}
              content={textTransitionItems[currentIndex].richText}
              enableGutter={false}
            />
          )}
          {/* Render the static rich text at the bottom */}
          {richText && (
            <RichText className={styles.staticText} content={richText} enableGutter={false} />
          )}
          {/* Render the links */}
          {Array.isArray(links) && links.length > 0 && (
            <ul className={styles.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.mediaWrapper}>
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="-z-10 object-cover"
            priority={false}
            loading="lazy"
            resource={media}
          />
        )}
      </div>
    </div>
  )
}
