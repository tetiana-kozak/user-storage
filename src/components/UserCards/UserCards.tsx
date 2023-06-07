import { useEffect, useState } from 'react'
import UserCard from './UserCard'
import './UserCards.scss'
import axios from 'axios'

export type Users = {
  id: number
  name: string
  email: string
  phone: string
  position: string
  photo: string
}

type Props = {}

const Users = (props: Props) => {
  const [users, setUsers] = useState<Users[]>()

  const fetchUsers = async () =>
    await axios
      .get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6 '
      )
      .then((data) => setUsers(data.data.users))
      .catch((error) => console.log('fetchUsers error:', error))

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="user-cards">
      {users?.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          position={user.position}
          photo={user.photo}
        />
      ))}
    </div>
  )
}
export default Users
