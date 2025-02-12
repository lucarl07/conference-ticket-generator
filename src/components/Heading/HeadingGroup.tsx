import React from "react"

interface HeadingGroupProps {
  children: React.ReactNode
}

const HeadingGroup = ({ children }: HeadingGroupProps) => {
  return (
    <hgroup>
      {children}
    </hgroup>
  )
}

export default HeadingGroup