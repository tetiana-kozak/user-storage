import { useState } from 'react'
import RegisterForm from '../../RegisterForm/RegisterForm'
import { UsersType } from '../../../container/Main/Main'
import SuccessMessage from '../../RegisterForm/SuccessMessage'

type Props = {}
const RegisterFormSection = (props: Props) => {
  // add user

  const [isUserPost, setIsUserPost] = useState<boolean>(false)

  const [userData, setUserData] = useState<UsersType>({
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
  })

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    element: string
  ) => {
    setUserData((prevState) => ({
      ...prevState,
      [element]: e.target.value,
    }))
  }

  return (
    <>
      {isUserPost ? (
        <SuccessMessage />
      ) : (
        <RegisterForm userData={userData} handleFormData={handleFormData} />
      )}
    </>
  )
}
export default RegisterFormSection
