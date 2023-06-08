import axios from 'axios'
import ShowMoreButton from '../../Buttons/ShowMoreButton'
import SectionTitle from '../../Typography/SectionTitle/SectionTitle'
import UserCards from '../../UserCards/UserCards'
import { useEffect, useState } from 'react'

export type UsersType = {
  id: number
  name: string
  email: string
  phone: string
  position: string
  photo: string
}

type Props = {}

const UsersSection = (props: Props) => {
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
    <section className="section-gap">
      <SectionTitle>Working with GET request</SectionTitle>
      <UserCards users={users} />
      {isShowButton && <ShowMoreButton getUsers={getUsers} />}
    </section>
  )
}
export default UsersSection
