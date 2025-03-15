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
  let width: number, height: number

  console.log('props', loadingFromProps, priorityFromProps, className)
  if (
    loadingFromProps === undefined &&
    priorityFromProps === undefined &&
    className === undefined
  ) {
    width = 300
    height = 60
  } else {
    width = 150
    height = 30
  }
  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Kevin Skayro Logo"
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={styles.logoImage(className)}
      src="/images/kevin-skayro-logo.png"
    />
  )
}

export const Icon = () => {
  return (
    <Image alt="Kevin Skayro Icon" width={50} height={50} src="/images/kevin-skayro-icon.png" />
  )
}
