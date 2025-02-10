import React from 'react'

interface SubmitBtnProps {
  children: React.ReactNode
}

const SubmitBtn = ({ children }: SubmitBtnProps) => {
  return (
    <button type="submit">
      {children}
    </button>
  )
}

export default SubmitBtn