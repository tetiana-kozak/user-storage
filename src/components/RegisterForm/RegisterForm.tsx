import SignUpButton from '../Buttons/SignUpButton'
import './RegisterForm.scss'
import { useState, ChangeEvent } from 'react'

type Props = {}
const RegisterForm = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file || null)
  }

  return (
    <div className="form-container">
      <form action="" method="post" className="register-form">
        <input
          type="text"
          name=""
          id="name"
          placeholder="Your name"
          className="form-input"
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email"
          className="form-input"
        />
        <input
          type="tel"
          name=""
          id="phone"
          placeholder="Phone"
          className="form-input"
        />
        <div className="position-buttons">
          <p>Select your position</p>
          <div className="position-buttons-options">
            <div className="radio-button">
              <input type="radio" name="position" id="frontend-developer" />
              <label htmlFor="frontend-developer">Frontend developer</label>
            </div>
            <div className="radio-button">
              <input type="radio" name="position" id="backend-developer" />
              <label htmlFor="backend-developer">Backend developer</label>
            </div>
            <div className="radio-button">
              <input type="radio" name="position" id="designer" />
              <label htmlFor="designer">Designer</label>
            </div>
          </div>
        </div>

        <div className="upload-form">
          <label htmlFor="imageUpload" className="upload-label">
            <span className="upload-button">Upload</span>
            <span className="file-name">
              {selectedFile ? selectedFile.name : 'Upload your photo'}
            </span>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="button-hide"
            onChange={handleFileChange}
          ></input>
        </div>

        <SignUpButton />
      </form>
    </div>
  )
}
export default RegisterForm
