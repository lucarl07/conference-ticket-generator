import React from 'react'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ children }: FormProps) => {
  return (
    <form method="post">
      {children}
    </form>
  )
}

export default Form