import React from 'react'
import _iconInfo from 'images/icon-info.svg'

interface ControlRootProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  info?: string
  error?: string
}

const ControlRoot = ({ label, children, info, error }: ControlRootProps) => {
  const iconAlt = error ? "Input Field Error" : "Relevant Information"
  const errorValidation = error != undefined && error.length > 0

  return (
    <label>
      <span>{label}</span>
      {children}
      {((errorValidation && error) || info) && (
        <div>
          <img src={_iconInfo} alt={iconAlt} />
          <small>{(errorValidation && error) || info}</small>
        </div>
      )}
    </label>
  )
}

export default ControlRoot