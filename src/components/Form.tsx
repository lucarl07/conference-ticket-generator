import React from 'react'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ children, ...rest }: FormProps) => {
  return (
    <form {...rest} method="post">
      {children}
    </form>
  )
}

export default Form