import UserCard from './UserCard'
import './UserCards.scss'

type Props = {}
const Users = (props: Props) => {
  return (
    <div className="user-cards">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}
export default Users
