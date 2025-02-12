// Hooks:
import { useRef, useState } from 'react'

// Assets:
import _iconUpload from 'images/icon-upload.svg'
import _imageAvatar from 'images/image-avatar.jpg' // Placeholder asset, will be removed later

interface ControlFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string
}

const ControlFileInput = ({ message, ...rest }: ControlFileInputProps) => {
  const inputRef = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div>
      {/* Will have its attributes passed down to buttons: */}
      <input 
        {...rest} 
        type="file" 
        ref={inputRef}
        style={{ display: 'none' }} 
      />

      {selectedFile ? (
        <button>
          <img src={_iconUpload} alt="Upload Icon" />
          <span>{message}</span>
        </button>
      ) : (
        <div>
          <img src={_imageAvatar} alt="Selected File" />
          <div>
            <button>Change file</button>
            <button>Remove file</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ControlFileInput