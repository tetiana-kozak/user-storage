import axios from 'axios'
import SignUpButton from '../Buttons/SignUpButton'
import './RegisterForm.scss'
import { useState, ChangeEvent, useEffect } from 'react'
import SectionTitle from '../Typography/SectionTitle/SectionTitle'
import { UsersType } from '../../container/Main/Main'

type Positions = {
  id: number
  name: string
}

type Props = {
  userData: UsersType
  handleFormData: (
    e: React.ChangeEvent<HTMLInputElement>,
    element: string
  ) => void
}

const RegisterForm = ({ userData, handleFormData }: Props) => {
  // state for uploading file
  const [selectedFile, setSelectedFile] = useState<any>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    handleFormData(e, 'photo')
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

  console.log('userData', userData)

  return (
    <section className="section-gap">
      <SectionTitle>Working with POST request</SectionTitle>
      <div className="form-container">
        <form action="" method="post" className="register-form">
          <input
            type="text"
            name=""
            id="name"
            placeholder="Your name"
            className="form-input"
            value={userData.name}
            onChange={(e) => handleFormData(e, 'name')}
          />
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email"
            className="form-input"
            value={userData.email}
            onChange={(e) => handleFormData(e, 'email')}
          />
          <input
            type="tel"
            name=""
            id="phone"
            placeholder="Phone"
            className="form-input"
            value={userData.phone}
            onChange={(e) => handleFormData(e, 'phone')}
          />

          <div className="position-buttons">
            <p>Select your position</p>
            <div className="position-buttons-options">
              {positions?.map((position) => (
                <div className="radio-button" key={position.id}>
                  <input
                    type="radio"
                    name="position"
                    id={position.name}
                    value={position.name}
                    onChange={(e) => handleFormData(e, 'position')}
                  />
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
              value={userData.photo}
            ></input>
          </div>

          <SignUpButton />
        </form>
      </div>
    </section>
  )
}
export default RegisterForm
