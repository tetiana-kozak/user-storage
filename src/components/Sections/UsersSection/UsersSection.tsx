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
  const [users, setUsers] = useState<UsersType[]>()

  const fetchUsers = async () =>
    await axios
      .get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6 '
      )
      .then((data) => setUsers(data.data.users))
      .catch((error) => console.log('fetchUsers error:', error))

  useEffect(() => {
    fetchUsers()
    console.log('users', users)
  }, [])

  return (
    <section className="section-gap">
      <SectionTitle>Working with GET request</SectionTitle>
      <UserCards users={users} />
      <ShowMoreButton />
    </section>
  )
}
export default UsersSection
