import React from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingTitleProps {
  children: React.ReactNode
  level?: HeadingLevel
}

const HeadingTitle = ({ children, level = 1 }: HeadingTitleProps) => {
  const styles = ``

  switch (level) {
    case 1:
      return <h1 className={styles}>{children}</h1>
    case 2:
      return <h2 className={styles}>{children}</h2>
    case 3:
      return <h3 className={styles}>{children}</h3>
    case 4:
      return <h4 className={styles}>{children}</h4>
    case 5:
      return <h5 className={styles}>{children}</h5>
    case 6:
      return <h6 className={styles}>{children}</h6>
  }
}

export default HeadingTitle