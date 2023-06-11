import { UsersType } from '../../container/Main/Main'
import UserCard from './UserCard'
import './UserCards.scss'

type Props = {
  users?: UsersType[]
}

const Users = ({ users }: Props) => {
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
