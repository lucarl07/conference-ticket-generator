import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import _iconUpload from 'images/icon-upload.svg'

interface ControlFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string
}

const ControlFileInput = ({ message, ...rest }: ControlFileInputProps) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...rest} {...getInputProps()} />
      <div>
        <img src={_iconUpload} alt="Upload Icon" />
        <p>{message || "Drag and drop or click to upload"}</p>
      </div>
    </div>
  )
}

export default ControlFileInput