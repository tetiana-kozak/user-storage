import './UserCard.scss'
import photo from '../../assets/photo-cover.svg'

type Props = {}

const UserCard = (props: Props) => {
  return (
    <div className="user-card">
      <img src={photo} alt="user photo" className="user-photo" />
      <h5 className="user-description">Takamaru Ayako Jurrien</h5>
      <div className="user-description">
        <h4>Lead Independent Director Lead Independent Director</h4>
        <h4>frontend_develop@gmail.com</h4>
        <h4>+38 (098) 278 44 24</h4>
      </div>
    </div>
  )
}
export default UserCard
