import React from 'react'

interface HeadingSubtitleProps {
  children: React.ReactNode
}

const HeadingSubtitle = ({ children }: HeadingSubtitleProps) => {
  return (
    <p>{children}</p>
  )
}

export default HeadingSubtitle