import { useState } from 'react'
import RegisterForm from '../../RegisterForm/RegisterForm'
import SectionTitle from '../../Typography/SectionTitle/SectionTitle'
import { UsersType } from '../../../container/Main/Main'
import SuccessMessage from '../../RegisterForm/SuccessMessage'

type Props = {}
const RegisterFormSection = (props: Props) => {
  // add user

  const [isUserPost, setIsUserPost] = useState<boolean>(true)

  const [userData, setUserData] = useState<UsersType>({
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
  })

  return <>{isUserPost ? <SuccessMessage /> : <RegisterForm />}</>
}
export default RegisterFormSection
