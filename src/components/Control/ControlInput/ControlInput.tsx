import React from 'react'

interface ControlInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const ControlInput = ({ placeholder, ...rest }: ControlInputProps) => {
  return (
    <input {...rest} placeholder={placeholder} />
  )
}

export default ControlInput