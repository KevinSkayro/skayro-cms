import React from 'react'
import Image from 'next/image'
import { styles } from './Logo.styles'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Kevin Skayro Logo"
      width={150}
      height={30}
      loading={loading}
      decoding="async"
      className={styles.logoImage(className)}
      src="/images/kevin-skayro-logo.png"
    />
  )
}
