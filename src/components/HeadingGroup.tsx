type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingGroupProps {
  hlevel?: HeadingLevel // Experimental attribute; may use it if diverse-level hgroups are implemented
  title: string
  subtitle: string
}

const HeadingGroup = ({ title, subtitle }: HeadingGroupProps) => {
  return (
    <hgroup>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </hgroup>
  )
}

export default HeadingGroup