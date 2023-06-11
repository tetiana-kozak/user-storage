import { useState } from 'react'
import RegisterForm from '../../RegisterForm/RegisterForm'
import { UsersType } from '../../../container/Main/Main'
import SuccessMessage from '../../RegisterForm/SuccessMessage'
import axios from 'axios'

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

  const sendForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post(
        'https://my-json-server.typicode.com/tetiana-kozak/users-database/users',
        {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          position: userData.position,
          photo: userData.photo,
        }
      )
      .then((response) => console.log('response', response))
      .then(() => setIsUserPost(true))
  }

  //   var formData = new FormData();
  //   // file from input type='file'
  //   var fileField = document.querySelector('input[type="file"]');
  //   formData.append('position_id', 2);
  //   formData.append('name', 'Jhon'); formData.append('email', 'Jhon@gmail.com');
  //   formData.append('phone', '+380955388485');
  //   formData.append('photo', fileField.files[0]);

  // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token,
  // // get token with GET api/v1/token method
  // }, })
  // .then(function(response) { return response.json(); }) .then(function(data) { console.log(data);
  //   if(data.success) {
  //   // process success response
  // } else {
  //   // proccess server errors
  // } }) .catch(function(error) {
  //   // proccess network errors
  // });

  return (
    <>
      {isUserPost ? (
        <SuccessMessage />
      ) : (
        <RegisterForm
          userData={userData}
          handleFormData={handleFormData}
          sendForm={sendForm}
        />
      )}
    </>
  )
}
export default RegisterFormSection
