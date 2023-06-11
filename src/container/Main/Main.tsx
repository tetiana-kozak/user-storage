import FeaturedSection from '../../components/Sections/FeaturedSection/FeaturedSection'
import RegisterFormSection from '../../components/Sections/RegisterFormSection/RegisterFormSection'
import UsersSection from '../../components/Sections/UsersSection/UsersSection'
import './Main.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

export type UsersType = {
  id?: number
  name: string
  email: string
  phone: string
  position: string
  photo: string
}

type Props = {}

const Main = (props: Props) => {
  // fetch users

  const firstUsersURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'

  const [users, setUsers] = useState<UsersType[]>([])
  const [nextUsersLink, setNextUsersLink] = useState<string>(firstUsersURL)
  const [isShowButton, setIsShowButton] = useState<boolean>(true)

  const getUsers = async () => {
    await axios
      .get(nextUsersLink)
      .then((response) => {
        setUsers([...users, ...response.data.users])
        const newNextLink = response.data.links.next_url
        if (newNextLink) {
          setNextUsersLink(newNextLink)
        } else if (newNextLink === null) {
          setIsShowButton(false)
        }
      })
      .catch((error) => console.log('showMoreUsers error:', error))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <main className="main">
      <div className="container">
        <div className="layout">
          <FeaturedSection />
          <UsersSection
            users={users}
            isShowButton={isShowButton}
            getUsers={getUsers}
          />
          <RegisterFormSection />
        </div>
      </div>
    </main>
  )
}
export default Main
