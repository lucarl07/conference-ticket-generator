// Hooks:
import { useRef, useState } from 'react'

// Assets:
import _iconUpload from 'images/icon-upload.svg'
import _imageAvatar from 'images/image-avatar.jpg' // Placeholder asset, will be removed later

interface ControlFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string
}

const ControlFileInput = ({ message, ...rest }: ControlFileInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  const onChooseFile = () => {
    inputRef?.current?.click()
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  return (
    <div>
      {/* Will have its attributes passed down to buttons: */}
      <input 
        {...rest} 
        type="file" 
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: 'none' }}
      />

      {selectedFile ? (
        <div>
          <img src={_imageAvatar} alt="Selected File" /> {/* Mockup image used as a placeholder */}
          <div>
            <button type="button" onClick={onChooseFile}>Change file</button>
            <button type="button" onClick={removeFile}>Remove file</button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={onChooseFile}>
          <img src={_iconUpload} alt="Upload Icon" />
          <span>{message}</span>
        </button>
      )}
    </div>
  )
}

export default ControlFileInput