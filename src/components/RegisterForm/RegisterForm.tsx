import axios from 'axios'
import SignUpButton from '../Buttons/SignUpButton'
import './RegisterForm.scss'
import { useState, ChangeEvent, useEffect } from 'react'

type Positions = {
  id: number
  name: string
}

type Props = {}

const RegisterForm = (props: Props) => {
  // state for uploading file
  const [selectedFile, setSelectedFile] = useState<any>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file || null)
  }

  // state for fetching positions for checkboxes
  const [positions, setPositions] = useState<Positions[]>()

  const fetchPositions = async () =>
    await axios
      .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then((data) => setPositions(data.data.positions))
      .catch((error) => console.log('fetchPositions error: ', error))

  useEffect(() => {
    fetchPositions()
  }, [])

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
            {positions?.map((position) => (
              <div className="radio-button" key={position.id}>
                <input type="radio" name="position" id={position.name} />
                <label htmlFor={position.name}>{position.name}</label>
              </div>
            ))}
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
