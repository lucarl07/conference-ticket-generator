import React from 'react'
import _iconInfo from 'images/icon-info.svg'

interface ControlRootProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  info?: string
  error?: string
}

const ControlRoot = ({ label, children, info, error }: ControlRootProps) => {
  const iconAlt = error ? "Input Field Error" : "Relevant Information"

  return (
    <label>
      <span>{label}</span>
      {children}
      {(info || error) && (
        <div>
          <img src={_iconInfo} alt={iconAlt} />
          <span>{error || info}</span>
        </div>
      )}
    </label>
  )
}

export default ControlRoot