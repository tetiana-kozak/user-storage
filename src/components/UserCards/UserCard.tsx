import './UserCard.scss'

type Props = {
  name: string
  email: string
  phone: string
  position: string
  photo: string
}

const UserCard = ({ name, email, phone, position, photo }: Props) => {
  return (
    <div className="user-card">
      <img src={photo} alt="user photo" className="user-photo" />
      <h5 className="user-description line-clamp">{name}</h5>
      <div className="user-description">
        <h4 className="line-clamp">{position}</h4>
        <h4 className="line-clamp">{email}</h4>
        <h4 className="line-clamp">{phone}</h4>
      </div>
    </div>
  )
}
export default UserCard
